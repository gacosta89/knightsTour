import { connect } from 'react-redux';
import createLoadPanel from 'shared/components/loadpanel';
import { impHidePanel } from 'shared/actions/import';

// Which part of the Redux global state does our component want to receive as props?
export default ({impSolution, React}) => {
  const mapStateToProps = ({imp}) => {
    return {
      showPanel: imp.showPanel
    };
  },
    mapDispatchToProps = dispatch => {
      return {
        onLoad (url) {
          dispatch(impSolution(url));
        },
        onClose () {
          dispatch(impHidePanel());
        }
      };
    };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(createLoadPanel(React));
};
