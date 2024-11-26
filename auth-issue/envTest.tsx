import { TEST_ENV_VAR } from '@env';
import { Text, View } from 'react-native';

export const EnvTest = () => {
  return (
    <View>
      <Text>Environment variable test: {TEST_ENV_VAR}</Text>
    </View>
  );
};
