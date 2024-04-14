import {Component} from 'react'

import {GrGamepad} from 'react-icons/gr'

import Header from '../Header'

import Navigator from '../Navigator'

import SavedVideoItem from '../SavedVideoItem'

import CustomContext from '../../context/CustomContext'

import {
  MainContainer,
  ResponsiveContainer,
  SavedContainer,
  SavedLogoContainer,
  SavedIconContainer,
  SavedHeading,
  VideoListContainer,
  EmptyViewContainer,
  EmptyDescription,
  EmptyTitle,
  EmptyViewImage,
  SavedVideoListContainer,
} from './styledComponents'

class SavedVideosRoute extends Component {
  renderSavedVideosList = savedVideosList => (
    <>
      <SavedLogoContainer>
        <SavedIconContainer>
          <GrGamepad />
        </SavedIconContainer>
        <SavedHeading>Saved</SavedHeading>
      </SavedLogoContainer>
      <SavedVideoListContainer>
        {savedVideosList.map(savedVideo => (
          <SavedVideoItem key={savedVideo.id} savedVideo={savedVideo} />
        ))}
      </SavedVideoListContainer>
    </>
  )

  renderNoVideosView = () => (
    <EmptyViewContainer>
      <EmptyViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <EmptyTitle>No saved videos found</EmptyTitle>
      <EmptyDescription>
        You can save your videos while watching them
      </EmptyDescription>
    </EmptyViewContainer>
  )

  renderViews = savedVideosList => {
    const isSavedVidoesListEmpty = savedVideosList.length === 0

    return isSavedVidoesListEmpty
      ? this.renderNoVideosView()
      : this.renderSavedVideosList(savedVideosList)
  }

  render() {
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode, savedVideosList} = value
          return (
            <MainContainer
              data-testid="savedVideos"
              isInDarkMode={isInDarkMode}
            >
              <Header />
              <SavedContainer>
                <ResponsiveContainer>
                  <Navigator />
                  <VideoListContainer>
                    {this.renderViews(savedVideosList)}
                  </VideoListContainer>
                </ResponsiveContainer>
              </SavedContainer>
            </MainContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default SavedVideosRoute
