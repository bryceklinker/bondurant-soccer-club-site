import { render, screen } from '../../../testing';
import { InputContainer } from './InputContainer';

describe('InputContainer', () => {
    test('when rendered then shows label', () => {
        render(<InputContainer label={'stuff'} />);

        expect(screen.getByText('stuff')).toBeInTheDocument();
    });

    test('when errors are provided then shows each error', () => {
        render(
            <InputContainer label={'ikd'} errors={['one', 'three', 'two']} />
        );

        expect(screen.getAllByRole('alert')).toHaveLength(3);
        expect(screen.getByText('one')).toBeInTheDocument();
        expect(screen.getByText('two')).toBeInTheDocument();
        expect(screen.getByText('three')).toBeInTheDocument();
    });
});
