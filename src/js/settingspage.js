const profileimagehover = document.getElementById('change-profile-picture');
const overlayelem = document.getElementById('overlay-dark')

profileimagehover.addEventListener('mouseover',()=>{
    overlayelem.classList.remove('hidden');
});

profileimagehover.addEventListener('mouseleave',()=>{
    overlayelem.classList.add('hidden');
});

console.log(document.getElementById('profile-settings').checked);

if(document.getElementById('profile-settings').checked){
    document.getElementById('profile-settings-list').classList.remove('hidden');
}

function settingsdisplay(){
    console.log('A'+document.getElementById('profile-settings').checked);
    console.log('B'+document.getElementById('security-settings').checked);
    console.log('C'+document.getElementById('account-settings').checked);

    if(document.getElementById('profile-settings').checked){        
        document.getElementById('profile-settings-list').classList.remove('hidden');
    }
    else if(!document.getElementById('profile-settings').checked){
        document.getElementById('profile-settings-list').classList.add('hidden');
    }
    if(document.getElementById('security-settings').checked){
        document.getElementById('security-settings-list').classList.remove('hidden');
    }
    else if(!document.getElementById('security-settings').checked){
        document.getElementById('security-settings-list').classList.add('hidden');
    }
    if(document.getElementById('account-settings').checked){
        document.getElementById('account-settings-list').classList.remove('hidden');
    }
    else if(!document.getElementById('account-settings').checked){
        document.getElementById('account-settings-list').classList.add('hidden');
    }
}

function newpasswordcheck(){
    if(document.getElementById('new-password').value == document.getElementById('confirm-password').value){
        document.getElementById('new-password').value='';
        document.getElementById('confirm-password').value='';
        document.getElementById('new-password').style.border= "0px";
    }
    else {
        document.getElementById('new-password').value='';
        document.getElementById('confirm-password').value='';
        document.getElementById('new-password').style.border= "1px solid red";
    }
}