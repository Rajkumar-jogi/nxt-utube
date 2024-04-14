import styled from 'styled-components'

// Main container
export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#0f0f0f' : '#f9f9f9'};
`

export const ResponsiveContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 100vw;
    flex-direction: row;
    align-items: flex-start;
  }
`

// Video item container
export const VideoItemContainer = styled.div`
  padding: 12px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 98%;
  max-width: 550px;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

// Video player container
export const VideoPlayerContainer = styled.div`
  background-color: #f0f0f0;
  height: 340px;
  width: 100%;
  max-width: 640px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 98%;
    max-width: 1110px;
    height: 460px;
  }
`

// Video title
export const VideoTitle = styled.h2`
  margin: 10px 0;
  color: #777;
`

export const ResContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

// Video views and published ago
export const VideoViewsAndPublishedAgo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

// Views
export const Views = styled.span`
  color: #777;
  margin-right: 12px;
`

// Published
export const Published = styled.span`
  color: #777;
`

// Video interaction container
export const VideoIntarctionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

// Likes, Dislikes, SaveVideo
export const Likes = styled.button`
  background-color: transparent;
  color: ${({isActive}) => (isActive ? '#2563eb' : '#64748b')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  font-size: 16px;
`

export const Dislikes = styled.button`
  background-color: transparent;
  color: ${({isActive}) => (isActive ? '#2563eb' : '#64748b')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  font-size: 16px;
`

export const SaveVideo = styled.button`
  background-color: transparent;
  color: ${({isActive}) => (isActive ? '#2563eb' : '#64748b')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  font-size: 16px;
`

// Horizontal line
export const HorizontalLine = styled.hr`
  border: 0;
  border-top: 2px solid #ccc;
  width: 100%;
`

// Channel info container
export const ChanneInfoContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
`

// Channel profile container
export const ChannelProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

// Channel image
export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

// Channel content container
export const ChannelContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

// Channel name
export const ChannelName = styled.span`
  font-weight: bold;
  color: #777;
`

// Channel subscribers
export const ChannelSubscribers = styled.span`
  color: #777;
`

// Channel description container
export const ChannelDescriptionContainer = styled.div`
  margin-left: 20px;
`

// Channel description
export const ChannelDescription = styled.p`
  color: #777;
`

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureViewImage = styled.img`
  width: 90%;
  max-width: 550px;
  margin-bottom: 16px;
`
export const FailureViewContentContainer = styled.div`
  text-align: center;
`

export const FailureHeding = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #1e293b;
`

export const FailureText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1e293b;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  border0=-radius: 12px;
  padding: 12px 20px 12px 20px;
`
