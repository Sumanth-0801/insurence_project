function showHideAddNewPackage(){
    if(document.getElementById("addNewPackage").classList.contains("d-none")){
        document.getElementById("addNewPackage").classList.remove("d-none");
        document.getElementById("packageFrame").src="../add-packages/add-packages.html";
    }else{
        document.getElementById("addNewPackage").classList.add("d-none");
    }
    }


    async function getPackageData() {
        // try {
        //     let packages = [];
        //     //API calling in js
        //     //Asynchronous way
        //     //alert(2);
        //     fetch("http://localhost:3000/packages/").then(res => res.json()).then(res => {
        //         binddata(res);
        //     }).catch((ex) => {
        //         alert("Execption");
        //     });
        // }
        // catch (ex) {
        //     alert("Exception");
        // }
        try{
            let packages = [];
            packages = await fetch("http://localhost:3000/packages/")
            packages = packages.json();
            return packages;
        }
        catch(ex){
            alert("Exception");
            return [];
        }
        // finally{
        //     alert("finally");
        // }
    }

    //alert(3);
    //return packages;
    // return new Array(
    //     {
    //         id: 1,
    //         title: "mansoon",
    //         desc: "M desc",
    //         amount: 25000,
    //         days: 12
    //     },
    //     {
    //         id: 2,
    //         title: "winter",
    //         desc: "W desc",
    //         amount: 25000,
    //         days: 12
    //     },
    //     {
    //         id: 3,
    //         title: "summer",
    //         desc: "S desc",
    //         amount: 25000,
    //         days: 12
    //     },
    // )




    // let package = new Object({
    //     id: 1,
    //     title: "mansoon",
    //     desc: "M desc",
    //     amount: 25000,
    //     days: 120
    // });

    //accessing the object value
    // alert(Object.keys(package));
    // alert(Object.values(package));

    async  function onLoad() {
        //alert(1);
        let packages = await getPackageData();
        //alert(4);
         (packages);
        //getPackageData();

        //checking array datatype
        //alert(Array.isArray(packages)); //true for array variable

        // document.getElementById("packageId").innerHTML = packages[0].id;
        // document.getElementById("title").innerHTML = packages[0].title;
        // document.getElementById("desc").innerHTML = packages[0].desc;
        // document.getElementById("amount").innerHTML = packages[0].amount;
        // document.getElementById("days").innerHTML = packages[0].days;

        // let package1 = {
        //     id: 2,
        //     title: "winter",
        //     desc: "M desc",
        //     amount: 25000,
        //     days: 120
        // }

        // document.getElementById("packageId1").innerHTML = packages[1].id;
        // document.getElementById("title1").innerHTML = packages[1].title;
        // document.getElementById("desc1").innerHTML = packages[1].desc;
        // document.getElementById("amount1").innerHTML = packages[1].amount;
        // document.getElementById("days1").innerHTML = packages[1].days;


    }

    // function binddata(packages) {
    //     if (Array.isArray(packages)) {
    //         for (let i = 0; i < packages.length; i++) {
    //             document.getElementById("packageId" + i).innerHTML = packages[i].id;
    //             document.getElementById("title" + i).innerHTML = packages[i].title;
    //             document.getElementById("desc" + i).innerHTML = packages[i].desc;
    //             document.getElementById("amount" + i).innerHTML = packages[i].amount;
    //             document.getElementById("days" + i).innerHTML = packages[i].days;
    //         }
    //     }
    // }
    function binddata(packages) {
        let tabledata = "";
        if (Array.isArray(packages)) {
            if (packages.length > 0) {
                for (let i = 0; i < packages.length; i++) {
                    tabledata += `<tr>
                    <td >${packages[i].id}</td>
                    <td >${packages[i].title}</td>
                    <td >${packages[i].desc}</td>
                    <td >${packages[i].amount}</td>
                    <td >${packages[i].days}</td>
                    <td>
                        <label for="" style="cursor: pointer;" onclick = "editPackage(${packages[i].id})">&#x270E;</label>
                        <label for="" style="cursor: pointer;"></label>
                    </td>
                </tr>`
                }
            }
            else {
                tabledata += '<tr><td colspan = "6" style="text-align : center">No Records Found</td></tr>'
            }
        }
        document.getElementById("tabledata").innerHTML = tabledata;
    }

    function editPackage(id){
        alert(id);
        showHideAddNewPackage();
        document.getElementById("packageFrame").src="../add-packages/add-packages.html?id="+id;
        
    }
    
   