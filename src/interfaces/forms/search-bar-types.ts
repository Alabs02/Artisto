import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

export interface ISearchBarProps {
  Icon: IconType;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSearch?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  iconPosition: string;
}
