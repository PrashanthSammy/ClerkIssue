// import React from 'react';
// import { View, Text } from 'react-native';
// import { styled } from 'nativewind';

// const StyledView = styled(View);
// const StyledText = styled(Text);

// export default function App() {
//   return (
//     <StyledView className="flex-1 items-center justify-center bg-white">
//       <StyledText className="text-xl font-bold text-blue-600">
//         Welcome to React Native with NativeWind!
//       </StyledText>
//       <StyledText className="mt-2 text-gray-600">
//         Start editing to see some magic happen!
//       </StyledText>
//     </StyledView>
//   );
// }


// import { View, Text } from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return <AppNavigation />;
}
