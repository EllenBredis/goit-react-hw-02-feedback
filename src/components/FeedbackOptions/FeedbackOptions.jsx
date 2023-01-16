import PropTypes from 'prop-types';
import {Btn, BtnList} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>
        <BtnList>
          {options.map(option => {
            return (
              <Btn
                type="button"
                onClick={() => onLeaveFeedback(option)}
                key={option}
                >
                {option}
              </Btn>
            );
          })}
        </BtnList>
      </>
    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;