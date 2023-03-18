import { render, screen } from '../../../testing';
import { Modal } from './Modal';

test('when shown then modal is shown', () => {
    render(<Modal open={true} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('when shown then modal has children', () => {
    render(
        <Modal open={true}>
            <div aria-label={'stuff'} />
        </Modal>
    );

    expect(screen.getByLabelText('stuff')).toBeInTheDocument();
});
