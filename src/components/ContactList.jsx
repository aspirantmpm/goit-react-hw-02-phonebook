import { Li } from './style';
import { Button } from './style';

export const ContactList = ({ items, deleteContact }) => {
  return (
    <ul>
      {items.map(item => (
        <Li key={item.id}>
          {item.name} : {item.number}
              <Button onClick={() => { deleteContact(item.id) }}>Delete</Button>
        </Li>
      ))}
    </ul>
  );
};
