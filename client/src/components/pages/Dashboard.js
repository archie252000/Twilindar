import React from 'react'

export const Dashboard = () => {
    return ( 
    <section id="dashboard">
        <section id="dashboard-inner">
            <div id="user-wrapper">
                <div id="user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" id="user-image"/>
                    <div id="user-info">
                    <div id="name">Name</div>
                    <div id="user-name">@username</div>
                </div>
            </div>
            <div id="logout-wrapper">
                <a href="#landing" id="logout-button">      
                    Logout
                </a>
            </div>
        </div>
{/* <div id="nothing-scheduled-wrapper">
            <img src="./assets/NothingFigure.png" id="nothing-image">
            <img src="./assets/NothingMessage.png" id="nothing-message">
        </div> */}
        <div id="cards-wrapper">
            <div class="card">
                <div class="card-top">
                    <div class="card-heading">Tweet</div>
                    <div class="card-date"><b>Date: dd/mm/yy Time: xx:xx:xx:xx</b></div>
                </div>
                <div class="card-middle">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Vivamus nec varius ligula, a tristique nisi.<br/> In semper leo eget lectus lacinia bibendum. Nam vitae est massa. Pellentesque vestibulum maximus sodales. .
                    </p>
                </div>
                <div class="card-bottom">
                    <a href="#" class="action-button edit-button">Edit</a>
                    <a href="#" class="action-button media-button">Media</a>
                    <a href="#" class="action-button delete-button">Delete</a>
                </div>
            </div>

            <div class="card">
                <div class="card-top">
                    <div class="card-heading">Thread <img class="thread-icon" src={require("../../assets/thread-icon.png")}></img>
                    </div>
                    <div class="card-date"><b>Date: dd/mm/yy Time: xx:xx:xx:xx</b></div>
                </div>
                <div class="card-thread-bar"></div>
                <div class="card-middle">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Vivamus nec varius ligula, a tristique nisi.<br/> In semper leo eget lectus lacinia bibendum. Nam vitae est massa. Pellentesque vestibulum maximus sodales. .
                    </p>
                </div>
                <div class="card-bottom">
                    <a href="#" class="action-button edit-button">Edit</a>
                    <a href="#" class="action-button media-button">Media</a>
                    <a href="#" class="action-button delete-button">Delete</a>
                </div>
            </div>
        </div>

  
        <div id="add-modal" class="modal">
            <div class="modal-content">
                <div id="modal-top">
                    <span class="close">&times;</span>
                </div>
                <form>
                    <textarea name="tweet-text" id="tweet-text" maxlength="280"></textarea>
                    <div id="count">
                        <span id="maximum">/280 characters</span>
                        <span id="current">0</span>
                    </div>
                    <div id="schedule-form-bottom">
                        <div id="add-to-thread-wrapper">
                            <div id="add-to-thread-button">
                                &plus;
                            </div>
                        </div>
                        <div id="schedule-button-wrapper">
                            <input id="schedule-button" type="submit" value="Schedule Tweet"/>
                        </div>
                    </div>
                </form>

            </div>
        </div>
 

        <div id="add-button-wrapper">
            <button id="add-button">
                <img src={require("../../assets/add-button.png")}id="add-button-image"/>
            </button>
        </div>
        <div id="bottom-wrapper">
            <img src={require("../../assets/logo-text.png")} id="logo-text"/>
        </div>
    </section>
</section>
    )
}