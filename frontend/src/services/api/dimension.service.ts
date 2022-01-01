import config from "../../config";
import { post } from "./api.service";

/**
 *
 * @returns
 */
const retrieveAvailableDimensions = async (): Promise<any> => {
  const data: any = await post({
    proxyUrl: `${config.proxyUrl}`,
    body: {
      url: `${config.apiUrl}?format=json`,
    },
  });
  const dimensions = data.dimension.map((dimension: any) => {
    return {
      label: dimension.display,
      value: dimension.label,
      // ...dimension,
    };
  });
  // console.log(dimensions.slice(0, 40));
  return dimensions.slice(0, 100);
};

const retrieveAvailableCodesForDimensions = async (
  code: string
): Promise<any> => {
  const data: any = await post({
    proxyUrl: `${config.proxyUrl}`,
    body: {
      url: `${config.apiUrl}${code}/?format=json`,
    },
  });
  let codes:any = [];
  data.dimension.forEach((dimension: any) => {
    codes.push(...dimension.code);
  });
  return codes.slice(0, 100);
};

export { retrieveAvailableDimensions, retrieveAvailableCodesForDimensions };
