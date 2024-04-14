import {Component} from 'react'

import Cookies from 'js-cookie'

import {FaFire} from 'react-icons/fa'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Navigator from '../Navigator'

import TrendingVideoItem from '../TrendingVideoItem'

import CustomContext from '../../context/CustomContext'

import {
  MainContainer,
  ResponsiveContainer,
  TrendingContainer,
  TrendingLogoContainer,
  TrendingIconContainer,
  TrendingHeading,
  VideoListContainer,
  VideosList,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureHeding,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiConstantsConfigs = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiConstantsConfigs.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  formateVideoItem = videoItem => {
    const formatedVideoItem = {
      id: videoItem.id,
      title: videoItem.title,
      thumbnailUrl: videoItem.thumbnail_url,
      viewCount: videoItem.view_count,
      publishedAt: videoItem.published_at,
      channel: {
        name: videoItem.channel.name,
        profileImageUrl: videoItem.channel.profile_image_url,
      },
    }

    return formatedVideoItem
  }

  getVideosList = async () => {
    console.log('triggered...', 'trending component')
    this.setState({apiStatus: apiConstantsConfigs.inProgress})
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const formatedVideosList = fetchedData.videos.map(videoItem =>
        this.formateVideoItem(videoItem),
      )
      this.setState({
        videosList: formatedVideosList,
        apiStatus: apiConstantsConfigs.success,
      })
    } else {
      this.setState({apiStatus: apiConstantsConfigs.failed})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        <TrendingLogoContainer>
          <TrendingIconContainer>
            <FaFire />
          </TrendingIconContainer>
          <TrendingHeading>Trending</TrendingHeading>
        </TrendingLogoContainer>
        <VideosList>
          {videosList.map(videoItem => (
            <TrendingVideoItem videoItem={videoItem} key={videoItem.id} />
          ))}
        </VideosList>
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryButton = () => {
    this.getVideosList()
  }

  renderFailedView = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureViewContentContainer>
        <FailureHeding>Opps! Something Went Wrong</FailureHeding>
        <FailureText>
          We are having some trouble to complete your request. Please try again
        </FailureText>
        <RetryButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </RetryButton>
      </FailureViewContentContainer>
    </FailureViewContainer>
  )

  renderDifferentViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILED':
        return this.renderFailedView()
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode} = value
          return (
            <MainContainer data-testid="trending" isInDarkMode={isInDarkMode}>
              <Header />
              <TrendingContainer>
                <ResponsiveContainer>
                  <Navigator />
                  <VideoListContainer>
                    {this.renderDifferentViews()}
                  </VideoListContainer>
                </ResponsiveContainer>
              </TrendingContainer>
            </MainContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default Trending
