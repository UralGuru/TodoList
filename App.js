import { SafeAreaView, StatusBar } from "react-native";
import TodoHeader from "./src/components/TodoHeader";
import TodoList from "./src/components/TodoList";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
          <StatusBar />
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
