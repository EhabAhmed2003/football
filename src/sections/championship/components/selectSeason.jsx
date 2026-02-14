import {
	NativeSelect,
	NativeSelectOption,
} from "@/components/ui/native-select";

function SelectSeason() {
	return (
		<NativeSelect>
			<NativeSelectOption value="">2025/2026</NativeSelectOption>
			<NativeSelectOption value="todo">2024/2025</NativeSelectOption>
			<NativeSelectOption value="in-progress">2023/2024</NativeSelectOption>
		</NativeSelect>
	);
}
export default SelectSeason;
