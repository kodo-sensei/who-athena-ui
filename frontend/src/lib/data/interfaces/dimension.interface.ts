export interface IGlobalDimension {
  attribute: ISpecificDimension[];
  copyright: string;
  dataset: ISpecificDimension[];
  dimension: ISpecificDimension[];
  fact: any[];
}

export interface ISpecificDimension {
  label: string;
  display: string;
  isMeasure?: boolean;
  code?: [];
  selected?: boolean;
}
