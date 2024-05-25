// Head over to the Credentials section in your app on CometChat Dashboard and where you can find your unique App ID, Region and Auth Key. 😊

export const AppConstants = {
  APP_ID: process.env.REACT_APP_COMETCHAT_APP_ID as string,
  REGION: process.env.REACT_APP_COMETCHAT_REGION as string,
  AUTH_KEY: process.env.REACT_APP_COMETCHAT_AUTH_KEY as string,
};