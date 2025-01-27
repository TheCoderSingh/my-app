import { MatchNo, MatchYes } from '@/src/constants/icons';
import { TouchableOpacity, Image } from 'react-native';

interface RoundButtonProps {
  type: string;
}

const RoundButton = ({ type }: RoundButtonProps) => {
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
