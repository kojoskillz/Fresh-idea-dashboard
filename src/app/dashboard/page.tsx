import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
// import dayjs from 'dayjs';


import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { Sales } from '@/components/dashboard/overview/sales';
import { Traffic } from '@/components/dashboard/overview/traffic';


export const metadata = { title: `Dashboard | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={40} sm={6} xs={120} >
        <Budget diff={12} trend="up" sx={{ height: '100%' }}  />
      </Grid>

      <Grid lg={6} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      {/* Teachers */}
      <Grid lg={3} md={6} xs={12}>
        <Traffic chartSeries={[11, 21, 33]} labels={['Males','Females','Total' ]}  sx={{ height: '100%' }}  />
      </Grid>
      {/* Students */}
      <Grid lg={3} md={6} xs={12} >
        <Traffic chartSeries={[40, 32, 72]} labels={['Males','Females','Total' ]} sx={{ height: '100%' }} />
      </Grid>
    </Grid>
  );
}
