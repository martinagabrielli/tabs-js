function showTabContent(){
    jQuery('#content-wrap .show').removeClass('show');
    switch(jQuery('#tab-wrap li').index(this)){
        case 0:
            jQuery('.content-a').addClass('show');
          break;
        case 1:
            jQuery('.content-b').addClass('show');
          break;
        case 2:

            jQuery('.content-c').addClass('show');
            break;
      }
}

jQuery('#tab-wrap li').click(showTabContent);