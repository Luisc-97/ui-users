import React from 'react';
import PropTypes from 'prop-types';
import ControlledVocab from '@folio/stripes-smart-components/lib/ControlledVocab';

class OwnerSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      intl: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.connectedControlledVocab = props.stripes.connect(ControlledVocab);
  }

  render() {
    return (
      <this.connectedControlledVocab
        {...this.props}
        baseUrl="owners"
        records="owners"
        label={this.props.stripes.intl.formatMessage({ id: 'ui-users.owners.label' })}
        labelSingular={this.props.stripes.intl.formatMessage({ id: 'ui-users.owners.singular' })}
        objectLabel=""
        hiddenFields={['numberOfObjects']}
        visibleFields={['owner', 'desc']}
        columnMapping={{
          owner: this.props.stripes.intl.formatMessage({ id: 'ui-users.owners.columns.owner' }),
          desc: this.props.stripes.intl.formatMessage({ id: 'ui-users.owners.columns.desc' })
        }}
        nameKey="ownerType"
        id="ownerstypes"
      />
    );
  }
}

export default OwnerSettings;
