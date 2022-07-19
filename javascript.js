let subheading = document.querySelectorAll( '.content h1' );
let togglenavbar = document.getElementById( "toggle-navbar" );
// console.log( subheading.length )

for ( let i = 0; i < subheading.length; i++ )
{
    subheading[ i ].addEventListener( 'click', function ()
    {   
        let content = subheading[ i ].nextElementSibling;
        if ( content.style.display === 'none' )
        {
            content.style.display = 'grid';
        }
        else
        {
            content.style.display = 'none';
        }
    } );
}


function togglehide ()
{
    if ( togglenavbar.style.display === "none" )
    {
        togglenavbar.style.display = "block";
    } else
    {
        togglenavbar.style.display = "none";
    }
}
