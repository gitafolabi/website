import React from 'react';
import './banner.css';
import { RiCloseLine } from 'react-icons/ri';
import Toggle from '../../components/toggle/Toggle';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

function Banner (props) {
  //introducting variables from i18n
  const { t } = useTranslation();

  /*Setting the App.js variables for dark/light mode to props*/
  const toggler = props.toggler;
  const themeOutput = props.themeOutput;
  const status = props.status;

  return (props.trigger) ? ( //when the trigger is initialized (begin as true), the banner will appear!
    <div className="nextensio__banner section__padding">
      {/*Toggle EXIT for banner to be hidden*/}
      <div className="nextensio__banner-toggle">
        <RiCloseLine
          size={32}
          onClick={() => props.setTrigger(false)}/> {/*this command will set the trigger to false ==> effectively closing the banner */}
      </div>

      {/*Main banner text*/}
      <div className="nextensio__banner-text">
        <h5>👋</h5>
        <p>{t('banner-1')}</p>
        <a href='mailto:support@chellrach.com
                    ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                    &body=Type%20Your%20Message%20Here'>
          <h4>{t('banner-contact')}</h4>
        </a>
        <p>{t('banner-2')}</p>
        <h5>🎯</h5>
      </div>
      
      {/*DARK/LIGHT mode toggler*/}
      <Toggle
        toggler={toggler}
        themeOutput={themeOutput}
        status={status}
      />

    </div>
  ) : ""; //else the banner will be hidden!
}

export default Banner