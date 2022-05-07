import { AuthParamList } from '../routes/auth/auth.routes';
import { ClientTabParamList } from '../routes/client/tab.routes';
import { ClientStackParamList } from '../routes/client/stack.routes';
import { CompanyTabParamList } from '../routes/company/tab.routes';
import { CompanyStackParamList } from '../routes/company/stack.routes';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AuthParamList {}
		interface RootParamList extends ClientTabParamList {}
		interface RootParamList extends CompanyTabParamList {}
		interface RootParamList extends ClientStackParamList {}
		interface RootParamList extends CompanyStackParamList {}
	}
}
