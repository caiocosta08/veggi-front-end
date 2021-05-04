export const copyToClipboard = (idHtml: string) => {
    /* Get the text field */
    var copyText: HTMLElement| null = document.getElementById(idHtml);
    console.log('COPY TEXT', copyText?.innerHTML)

    var areaTemp = document.createElement('textarea');
    //@ts-ignore
    areaTemp.value = copyText?.innerHTML;
    document.body.appendChild(areaTemp);
    areaTemp.select()

    /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    areaTemp.remove();
    /* Alert the copied text */
    // alert("Copied the text: " );
}