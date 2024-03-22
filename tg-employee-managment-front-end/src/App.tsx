import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppRoutes } from "./routes";

const App = (): React.ReactElement => {
	return (
		<LocalizationProvider dateAdapter={ AdapterDayjs }>
			<AppRoutes />
		</LocalizationProvider>
	);
}

export { App };
