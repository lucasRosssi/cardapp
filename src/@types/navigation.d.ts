import { RootTabParamList } from '../routes/client/tab.routes';
import { RootStackParamList } from '../routes/client/stack.routes';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootTabParamList {}
		interface RootParamList extends RootStackParamList {}
	}
}
