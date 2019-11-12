import { createAppContainer, createStackNavigator } from "react-navigation";

//Pages
import { Radio, Main, Podcast } from "./pages";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Radio,
      Main,
      Podcast
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
