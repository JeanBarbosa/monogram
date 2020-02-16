import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Grid from './pages/Grid';

const routes = createAppContainer(
    createSwitchNavigator({
        Grid: {
            screen: Grid,
            navigationOptions: {
                gesturesEnabled: false,
            },
        }
    })
);

export default routes;