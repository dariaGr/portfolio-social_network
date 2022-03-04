import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatusComponent', () => {
    test('status from the props should be in the state', () => {
        const component = create(<ProfileStatus status='my test status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('my test status');
    });

    test('after creation, <span> with a status should be displayed', () => {
        const component = create(<ProfileStatus status='my test status' />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test(`after creation, <input> shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status='my test status' />);
        const root = component.root;
        expect(() => {root.findByType('input')}).toThrow();
    });

    test('after creation, <span> with status should contain a correct status', () => {
        const component = create(<ProfileStatus status='my test status' />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('my test status')
    });

    test('<input> should be displayed in editMode=true instead of <span>', () => {
        const component = create(<ProfileStatus status='my test status' />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('my test status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='my test status' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
