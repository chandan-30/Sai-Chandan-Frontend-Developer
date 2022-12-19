import { render, screen, cleanup} from '@testing-library/react';
import Datasection from '../Datasection';



test('should render DataSection component', () => {    
    render(<Datasection/>)
    const typeElement = screen.getByTestId('Datasection-id')
    expect(typeElement).toBeInTheDocument();
})