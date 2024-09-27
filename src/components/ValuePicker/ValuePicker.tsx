import { FC, useCallback, useState } from 'react';
import { StyledValuePicker, StyledValuePickerLabel } from './ValuePicker.style';
import Select, { SingleValue } from 'react-select';
import { useTheme } from 'styled-components';

type ValuePickerOption = {
	value: number | string;
	label: string;
};

type ValuePickerProps = {
	label: string;
	options: ValuePickerOption[];
	// The function to call when the selected value changes; it receives the newly selected value as an argument
	onChange: (value: number | string) => void;
	defaultValue?: number | string;
}

export const ValuePicker: FC<ValuePickerProps> = ({ label, options, onChange, defaultValue }) => {
	const redbackTheme = useTheme();

	const [selectedOption, setSelectedOption] = useState<ValuePickerOption>(
		options.find(option => option.value === defaultValue) || options[0]
	);

	const handleChange = useCallback(
		(selected: SingleValue<ValuePickerOption>) => {
			if (selected) {
				setSelectedOption(selected);
				onChange(selected.value);
			}
		},
		[onChange]
	);

	return (
		<StyledValuePicker data-testid="ValuePicker">
			<StyledValuePickerLabel>
				<span>{label}</span>
				<Select
					defaultValue={selectedOption}
					onChange={handleChange}
					options={options}
					theme={(theme) => {
						return ({
							...theme,
							colors: {
								...theme.colors,
								// 'primary25' is used for the background colour when focused using keyboard arrow navigation,
								// which there is no way to properly target to override within the styled component or vanilla CSS;
								// but we can override react-select's theme object here
								// Ref: https://react-select.com/styles#overriding-the-theme
								primary25: redbackTheme.colors.subtle,
								primary: redbackTheme.colors.primary,
							},
						});
					}}
				/>
			</StyledValuePickerLabel>
		</StyledValuePicker>
	);
};
