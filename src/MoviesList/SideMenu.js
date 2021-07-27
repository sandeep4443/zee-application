import React from 'react'

const SideMenu = ({
    carousel,
    addUser,
    styles,
    expenses,
    genre,
    hooks,
    breakingBad,
    checkbox,
    dropDown,
    keyboard,
    addRemove,
    calculator
}) => {
    return (
        <>
            <div className="main-menu">
                <div className="settings"></div>
                <div className="scrollbar" id="style-1">
                    <ul>
                        <a><li className="darkerlishadow" href="#" onClick={carousel}><i className="fa fa-car"></i><span className="nav-text">Carousel</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={addUser}><i className="fa fa-user"></i><span className="nav-text">Add User</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={styles}><i className="fa fa-wrench"></i><span className="nav-text">Styles</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={expenses}><i className="fa fa-warning"></i><span className="nav-text">Expenses</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={genre}><i className="fa fa-venus"></i><span className="nav-text">Genre</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={hooks}><i className="fa fa-rocket"></i><span className="nav-text">Hooks</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={breakingBad}><i className="fa fa-hand-rock-o"></i><span className="nav-text">Breaking Bad</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={checkbox}><i className="fa fa-check-square"></i><span className="nav-text">CheckBox</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={dropDown}><i className="fa fa-chevron-down"></i><span className="nav-text">DropDowns</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={keyboard}><i className="fa fa-keyboard-o"></i><span className="nav-text">KeyBoard</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={addRemove}><i className="fa fa-remove"></i><span className="nav-text">Add Remove</span></li></a>
                        <a><li className="darkerlishadow" href="#" onClick={calculator}><i className="fa fa-calculator"></i><span className="nav-text">Calculator</span></li></a>
                        <li>
                            <a href="http://startific.com">
                                <i className="fa fa-heart-o fa-lg"></i>
                                <span className="share">
                                    <div className="addthis_default_style addthis_32x32_style">
                                        <div style={{ position: 'absolute', marginLeft: 56 + 'px', top: 3 + 'px' }}>
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" className="share-popup"><img src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png" width="30px" height="30px" /></a>
                                            <a href="https://twitter.com/share" target="_blank" className="share-popup"><img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png" width="30px" height="30px" /></a>
                                            <a href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_" target="_blank" className="share-popup"><img src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png" width="30px" height="30px" /></a>
                                        </div>
                                    </div>
                                </span>
                                <span className="twitter"></span>
                                <span className="google"></span>
                                <span className="fb-like">
                                    <iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fstartific&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=35" scrolling="no" frameborder="0" style={{ border: 'none', overflow: 'hidden', height: 35 + 'px' }} allowTransparency="true"></iframe>
                                </span>
                                <span className="nav-text">
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideMenu
