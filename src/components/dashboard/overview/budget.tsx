import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Stack from '@mui/material/Stack';
// import type { SxProps } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
// import { ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
import Image from 'next/image';


// import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';

// export interface BudgetProps {
//   diff?: number;
//   trend: 'up' | 'down';
//   sx?: SxProps;
//   value: string;
// }

export function Budget(): React.JSX.Element {
  // const TrendIcon = trend === 'up' ? ArrowUpIcon : ArrowDownIcon;
  // const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

  return (
    <Card>
      <CardContent>
        <div>
          <div>
                <h1>
                    HELLO MR. CLEMENT JOSIAH
                </h1>
                <h4>
                    Phone Number:+xxxxxxxx
                </h4>
          </div>
      
{/* image */}
             <div>
                       <Image
                            src="/assets/img4.png"
                            width={150}
                            height={150}
                            alt=""
                            className="object-contain"
                          />
             </div>
        </div>
      </CardContent>
    </Card>
  );
}
