import { createClassName, memo } from '../../helpers';
import { MessageBubble } from '../MessageBubble';
import styles from './styles.scss';

export const ImageAttachment = memo(({ url, className, ...messageBubbleProps }) => (
	<MessageBubble nude className={createClassName(styles, 'image-attachment', {}, [className])} {...messageBubbleProps}>

		<img src='rffrhttps://eshop.luminousdemo.com/storage/product/1711614556.jpg' className={createClassName(styles, 'image-attachment__inner')} />
	</MessageBubble>
));
