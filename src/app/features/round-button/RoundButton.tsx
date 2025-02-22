import { MatchNo, MatchYes } from '@/src/constants/icons';
import { TouchableOpacity, Image } from 'react-native';

interface RoundButtonProps {
  type: string;
}

/**
 * RoundButton Component
 *
 * This component displays a round button with a shadow effect.
 * It can be used to represent a "no" or "yes" action.
 *
 * @param {RoundButtonProps} props - The props for the RoundButton component.
 * @param {string} props.type - The type of button to display.
 *
 * @returns {JSX.Element} The RoundButton component displaying a round button with a shadow effect.
 */
const RoundButton = ({ type }: RoundButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      className="rounded-full"
      style={{
        boxShadow: '2px 5px 8.5px 0px #00000052',
      }}
    >
      {type === 'match-no' ? <MatchNo /> : <MatchYes />}
    </TouchableOpacity>
  );
};

export default RoundButton;
