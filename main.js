submission = () => {
    var fName = document.getElementById("inputFirstName").value;
    var lName = document.getElementById("inputLastName").value;
    var mob = document.getElementById("inputMobile").value;
    var add = document.getElementById("inputAddress").value;
    var add2 = document.getElementById("inputAddress2").value;
    var state = document.getElementById("inputState").value;
    var city = document.getElementById("inputCity").value;
    var zip = document.getElementById("inputZip").value;

    console.log(document.getElementById("inputFirstName").value);
    console.log(fName);
    console.log("testing fName");

  
    const makeAjaxCall = (fName) => {
        $.ajax({
            type: 'POST',
            signature: '6cab9a2aada111452fa2db8ba663fb6e29208d76e6b27b8ec75e97482bf70d2f',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            url: `https://cors-anywhere.herokuapp.com/https:app.yellowmessenger.com/integrations/facebook/${paramData.botId}`,
            // url: `http://localhost:8080/facebook/${window.pageId}`,
            data: {
                entry: [{
                    id: paramData && paramData.pageId || '105590444570995',
                    messaging: [{
                        sender: {
                            id: paramData && paramData.psid || '151982485752258823734586146'
                        },
                        recipient: {
                            id: paramData && paramData.pageId || '105590444570995'
                        },
                        postback: {
                            payload: {
                                event: 'address-value',
                                event_data: fName,
                                uid: paramData && paramData.psid || '151982485752258823734586146',
                                sender: paramData && paramData.psid || '151982485752258823734586146',
                                pageId: paramData && paramData.pageId || '105590444570995'
                            }
                        }
                    }]
                }]
            },
            beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("application/json;charset=UTF-8");
                }
            },
            success: function () {
                closeView();
            },
            // contentType: "application/json"
        });
    }
    


  
    console.log(fName);
    fName.textContent = " ";
    lName.value = "";
    mob.value = "";
    add.value = "";
    add2.value = "";
    state.value = "";
    city.value = "";
    zip.value = "";
  }


  