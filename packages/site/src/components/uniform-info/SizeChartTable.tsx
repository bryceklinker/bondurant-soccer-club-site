import { FC } from 'react';
import { SubTitle } from '../../common/components/SubTitle';
import { ColumnFlex } from '../../common/layout/ColumnFlex';

export const SizeChartTable: FC = () => {
    return (
        <ColumnFlex>
            <SubTitle>Unisex Sizing Chart</SubTitle>

            <table className={'table table-fixed'}>
                <thead>
                    <tr>
                        <th align={'center'}>Uniform&nbsp;Size</th>
                        <th align={'center'}>Unisex&nbsp;Chest</th>
                        <th align={'center'}>Unisex&nbsp;Waist</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th align={'center'}>YXS</th>
                        <td align={'center'}>25"&nbsp;-&nbsp;27"</td>
                        <td align={'center'}>21"&nbsp;-&nbsp;23"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YS</th>
                        <td align={'center'}>27"&nbsp;-&nbsp;29"</td>
                        <td align={'center'}>23"&nbsp;-&nbsp;25"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YM</th>
                        <td align={'center'}>29"&nbsp;-&nbsp;31"</td>
                        <td align={'center'}>25"&nbsp;-&nbsp;27"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YL</th>
                        <td align={'center'}>31"&nbsp;-&nbsp;33"</td>
                        <td align={'center'}>27"&nbsp;-&nbsp;29"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>AS</th>
                        <td align={'center'}>36"&nbsp;-&nbsp;38"</td>
                        <td align={'center'}>30"&nbsp;-&nbsp;32"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>AM</th>
                        <td align={'center'}>38"&nbsp;-&nbsp;40"</td>
                        <td align={'center'}>32"&nbsp;-&nbsp;34"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>AL</th>
                        <td align={'center'}>40"&nbsp;-&nbsp;42"</td>
                        <td align={'center'}>36"&nbsp;-&nbsp;38"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>AXL</th>
                        <td align={'center'}>42"&nbsp;-&nbsp;44"</td>
                        <td align={'center'}>38"&nbsp;-&nbsp;40"</td>
                    </tr>
                    <tr>
                        <th align={'center'}>A2XL</th>
                        <td align={'center'}>44"&nbsp;-&nbsp;46"</td>
                        <td align={'center'}>40"&nbsp;-&nbsp;42"</td>
                    </tr>
                </tbody>
            </table>
        </ColumnFlex>
    );
};
