import {Component} from 'react'

import Cookies from 'js-cookie'

import {BiSearch} from 'react-icons/bi'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Navigator from '../Navigator'

import HomeVideoItem from '../HomeVideoItem'

import CustomContext from '../../context/CustomContext'

import {
  MainContainer,
  HomeContainer,
  BannerContainer,
  ResponsiveContainer,
  BannerAndVideosListContainer,
  LogoContainer,
  LogoImage,
  CrossButton,
  BannerButton,
  BannerText,
  VideoListContainer,
  VideosSearchContainer,
  SearchButton,
  SearchInput,
  VideosList,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureHeding,
  FailureText,
  RetryButton,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultContentContainer,
  NoSearchResultHeading,
  NoSearchResultText,
} from './styledComponents'

const apiConstants = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
  empty: 'EMPTY',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosList: [],
    searchInput: '',
    showBanner: true,
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
    this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    console.log(searchInput)
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const formatedVideosList = fetchedData.videos.map(videoItem =>
        this.formateVideoItem(videoItem),
      )
      if (formatedVideosList.length === 0) {
        this.setState({
          apiStatus: apiConstants.empty,
        })
      } else {
        this.setState({
          videosList: formatedVideosList,
          apiStatus: apiConstants.success,
        })
      }
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  onClickRemoveBanner = () => {
    this.setState({showBanner: false})
  }

  renderBannerContainer = () => (
    <BannerContainer>
      <LogoContainer>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <CrossButton type="button" onClick={this.onClickRemoveBanner}>
          X
        </CrossButton>
      </LogoContainer>
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <BannerButton>GET IT NOW</BannerButton>
    </BannerContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosList>
        {videosList.map(videoItem => (
          <HomeVideoItem videoItem={videoItem} key={videoItem.id} />
        ))}
      </VideosList>
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

  renderNoSearchResult = () => (
    <NoSearchResultContainer>
      <NoSearchResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultContentContainer>
        <NoSearchResultHeading>
          Opps! Something Went Wrong
        </NoSearchResultHeading>
        <NoSearchResultText>
          We are having some trouble to complete your request. Please try again
        </NoSearchResultText>
        <RetryButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </RetryButton>
      </NoSearchResultContentContainer>
    </NoSearchResultContainer>
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
      case 'EMPTY':
        return this.renderNoSearchResult()
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitSearchResult = event => {
    event.preventDefault()
    this.getVideosList()
  }

  renderVideosContainer = isInDarkMode => (
    <VideoListContainer>
      <VideosSearchContainer
        isInDarkMode={isInDarkMode}
        onSubmit={this.onSubmitSearchResult}
      >
        <SearchInput
          type="search"
          isInDarkMode={isInDarkMode}
          placeholder="search"
          onChange={this.onChangeSearchInput}
        />
        <SearchButton type="submit">
          <BiSearch aria-label="search" />
        </SearchButton>
      </VideosSearchContainer>
      {this.renderDifferentViews()}
    </VideoListContainer>
  )

  render() {
    const {showBanner} = this.state
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode} = value

          return (
            <MainContainer>
              <Header />
              <HomeContainer data-testid="home" isInDarkMode={isInDarkMode}>
                <ResponsiveContainer>
                  <Navigator />
                  <BannerAndVideosListContainer>
                    {showBanner ? this.renderBannerContainer() : null}
                    {this.renderVideosContainer(isInDarkMode)}
                  </BannerAndVideosListContainer>
                </ResponsiveContainer>
              </HomeContainer>
            </MainContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default Home
