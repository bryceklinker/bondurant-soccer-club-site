import { FC } from 'react';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';

export const SizeComparisonTable: FC = () => {
    return (
        <ColumnFlex>
            <SubTitle>Sizing Comparison by age range*</SubTitle>
            <Paragraph>
                *This comparison gives an indication of typical size by age
                range only, and is by no means exact. Sizing may vary by
                manufacturer sometimes by a full inch.
            </Paragraph>
            <table className={'table table-fixed'}>
                <thead>
                    <tr>
                        <th align={'center'}>Score® Size</th>
                        <th align={'center'}>Age Range</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th align={'center'}>YXXS</th>
                        <td align={'center'}>3&nbsp;-&nbsp;4</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YXS</th>
                        <td align={'center'}>4&nbsp;-&nbsp;5</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YS</th>
                        <td align={'center'}>5&nbsp;-&nbsp;6</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YM</th>
                        <td align={'center'}>7&nbsp;-&nbsp;8</td>
                    </tr>
                    <tr>
                        <th align={'center'}>YL</th>
                        <td align={'center'}>10&nbsp;-&nbsp;12</td>
                    </tr>
                    <tr>
                        <th align={'center'}>AS</th>
                        <td align={'center'}>14&nbsp;-&nbsp;16</td>
                    </tr>
                </tbody>
            </table>
        </ColumnFlex>
    );
};
