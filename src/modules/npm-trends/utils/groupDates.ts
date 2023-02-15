import { format, startOfWeek } from 'date-fns';
import type { MOMENT_JS_TRENDS } from '../constants';

type Downlaods = (typeof MOMENT_JS_TRENDS)['downloads']
// Expect format:
// dates: [{"day":"2012-10-22","downloads":279},
//         {"day":"2012-10-23","downloads":2042}]
// period: 'week'
export const groupDownloadsByPeriod = (dates: Downlaods, period: 'week' | 'month' | 'year' = 'week') => {
  const downloadsGroupedByPeriod = {} as Record<string, number>;

  dates.forEach((date) => {
    const startOfPeriodDate = format(startOfWeek(new Date(date.day)), "yyyy-MM-dd")
    downloadsGroupedByPeriod[startOfPeriodDate] = downloadsGroupedByPeriod[startOfPeriodDate]
      ? downloadsGroupedByPeriod[startOfPeriodDate] + date.downloads
      : date.downloads;
  });

  return Object.entries(downloadsGroupedByPeriod).map(([key, value]) => ({
    period: new Date(key),
    downloads: value,
  }));
};
