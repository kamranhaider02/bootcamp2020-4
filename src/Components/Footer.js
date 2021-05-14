import React from 'react'
const Footer = (props) => {
  return (
    <div className="footer">
      <h4>Copyright &copy; 2021 by Kamran Haider</h4>
      <a href={props.fblink}><img src="https://scontent.fkhi5-1.fna.fbcdn.net/v/t1.6435-9/73071512_2198457150447068_4788860918400286720_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=04qNYSPxeCQAX9GUQR4&_nc_ht=scontent.fkhi5-1.fna&oh=8cebd1f3eaa0becb1471c95f1ff0b4cc&oe=60B7F91A" alt="fb-profil" className="fb-profil" target="_blank" /></a>
    </div>
  )
}

export default Footer
