import { Text, View } from 'react-native';
import '../../global.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function Index() {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text className="text-red-900">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </Provider>
  );
}
