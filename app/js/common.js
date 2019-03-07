$(function () {
// product list
    var prod = [
        {
            "productID": "1",
            "productName": "Product 1",
            "productPrice": "45",
            "productPrevPrice": "56",
            "categoryID": "1",
            "categoryName": "Sportbekleidung",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4179267.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4179267.png"
        },
        {
            "productID": "2",
            "productName": "Product 2",
            "productPrice": "10",
            "productPrevPrice": "14",
            "categoryID": "1",
            "categoryName": "Sportbekleidung",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4176519.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4176519.png?1551710816169"
        },
        {
            "productID": "3",
            "productName": "Product 3",
            "productPrice": "50",
            "productPrevPrice": "778",
            "categoryID": "1",
            "categoryName": "Sportbekleidung",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4178082.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4178082.png?1551710814064"
        }, {
            "productID": "4",
            "productName": "Product 4",
            "productPrice": "78",
            "productPrevPrice": "150",
            "categoryID": "2",
            "categoryName": "accessoires",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4176324.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4176324.png?1551710972102"
        },
        {
            "productID": "5",
            "productName": "Bag",
            "productPrice": "12",
            "productPrevPrice": "15",
            "categoryID": "2",
            "categoryName": "accessoires",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4176957.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4176957.png"
        },
        {
            "productID": "6",
            "productName": "Jeans",
            "productPrice": "46",
            "productPrevPrice": "56",
            "categoryID": "3",
            "categoryName": "jeans",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/bonprix/97460195.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_bonprix_97460195.png"
        },
        {
            "productID": "7",
            "productName": "Jeans",
            "productPrice": "114",
            "productPrevPrice": "141",
            "categoryID": "3",
            "categoryName": "jeans",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4182659.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4182659.png?1551955094618"
        },
        {
            "productID": "8",
            "productName": "accessoires",
            "productPrice": "114",
            "productPrevPrice": "141",
            "categoryID": "2",
            "categoryName": "accessoires",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4180573.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4180573.png?1551955135203"
        },
        {
            "productID": "9",
            "productName": "Product accessoires",
            "productPrice": "114",
            "productPrevPrice": "141",
            "categoryID": "2",
            "categoryName": "accessoires",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4179363.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4179363.png?1551955240682"
        },
        {
            "productID": "10",
            "productName": "Sportbekleidung",
            "productPrice": "30",
            "productPrevPrice": "141",
            "categoryID": "1",
            "categoryName": "Sportbekleidung",
            "imageSmall": "https://res.cloudinary.com/focloud/image/upload/c_fit,h_100,w_100/v1/aboutyou/4176685.jpg",
            "imageLarge": "http://91.210.226.50/MaennerOutfits.de/Transparent-images/transparent_aboutyou_4176685.png"
        },
    ];

    // preview modal preview show / hide
    $("#myBtn").on("click", function () {
        $("#preview-modal").show();
    });

    $(document).on("click", ".close", function () {
        $("#preview-modal").hide();
    });


    // save modal preview show / hide
    $(".save button").on("click", function () {
        if ($('#drop').html() != '') {
            $("#save-modal").show();
        }
    });

    $(document).on("click", ".close", function () {
        $("#save-modal").hide();
    });

    // tab menu
    $('.tabs ul li:first-child').addClass('tab-active');
    $('.content').hide();
    $('.content:first').show();

    $('.tabs ul li').click(function () {
        $('.tabs ul li').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;

    });

    // hide bachground img when clicked in product
    $(document).on('click', '.product-item', function () {
        $('main#main-wrapp section.drop-wrapp').css('background-image', 'unset')
    });

//    search box
    $("input[name='search']").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".product-item").filter(function () {
            return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1 || $(this).attr('data-prod-id').indexOf(value) > -1);
        });

    });


    // get category name
    $('.categ-item').on('click', function () {
        var getCatName = $(this).attr('data-category-name');
        var products = $('#products').empty();
        var products = $('#products').addClass('product-align')
        prod.forEach(function (item) {
            if (item.categoryName == getCatName) {
                $(products).append(
                    `<div class='product-item ${getCatName} ' data-prod-id=${item.productID}>
                    <img src=${item.imageSmall} draggable="true" class='prod-items' data-large-img=${item.imageLarge}>
                      <p class="price"> ${item.productPrice + ' ' + priceType} </p>
                    <div class="info">
                    <p class="title"> ${item.productName}</p>
                </div>
            </div>`
                );
            }
        });
    });

    //    default product
    var defaultProduct = $('#products');
    var priceType = ' &euro;';
    prod.forEach(function (item) {
        $(defaultProduct).append(
            `<div class='product-item' data-prod-id=${item.productID}>
                    <img src=${item.imageSmall} draggable="true" class='prod-items' data-large-img=${item.imageLarge}>  
                    <p class="price"> ${item.productPrice + ' ' + priceType}  </p>
                      <div class="info">
                    <p class="title"> ${item.productName}</p>
                </div>
            </div>`
        );
    });


   // product functions
    $(document).on('click', '.product-item', function (event) {

        var imgSrc = $(this).children('img').attr('data-large-img');
        var imgId = $(this).children('img').attr('id');
        var info = $(this).children('.info').html();
        var price = $(this).children('.price').html();

        // append img if clicked in drop section
        $('#drop').append(
            `<div class="cloned-item">
                <!--<div class="box"><div class="resize"></div>-->
                  <img src=${imgSrc}  />
                    <div class="info">
                       ${info} 
                       <p class="price">${price} </p>
                      <button class="close">Zum Outfit Hinzufügen</button>
                   </div>
                   <!--</div>-->
             </div>
        `).html();


        // moving items in drop section click and touch events
        function movieProduct() {
            $('.cloned-item').on('mousedown touchstart', function (event) {
                // if browser click events
                if (event.type == 'mousedown') {
                    $(this).addClass('active');
                    $(this).addClass('changes');
                    var oTop = event.pageY - $('.active').offset().top;
                    var oLeft = event.pageX - $('.active').offset().left;
                    $(this).parents().on('mousemove', function (event) {
                        $('.active').offset({
                            top: event.pageY - oTop,
                            left: event.pageX - oLeft
                        })
                            .on('mouseup', function () {
                                $(this).removeClass('active');
                            });
                    });
                }

                // if mobile touch events
                else {
                    $('body').css('overflow', 'hidden');
                    console.log('touchstart');
                    $(this).addClass('active');
                    $(this).addClass('changes');

                    var oTop = event.originalEvent.touches[0].pageY - $('.active').offset().top;
                    var oLeft = event.originalEvent.touches[0].pageX - $('.active').offset().left;

                    $(this).parents().on('touchmove', function (event) {
                        $('.active').offset({
                            top: event.originalEvent.touches[0].pageY - oTop,
                            left: event.originalEvent.touches[0].pageX - oLeft

                        })
                            .on('touchend', function () {
                                // console.log("end" + event.type)
                                $(this).removeClass('active');
                                $('body').css('overflow', 'unset');
                            });
                    });
                }

            });

        }

        movieProduct();

        // changes activate item
        function changesActive() {
            $('.cloned-item').on('mousedown touchstart', function () {
                $('main#main-wrapp .navigation .menu').css('display', 'block')
                $(this).siblings().removeClass('changes');
                $(this).addClass('changes');
            });
        }

        changesActive();


        // function menus
        $(document).on('mousedown touchstart', '.cloned-item', function () {
            $(this).siblings().removeClass('changes');
            $(this).addClass('changes');

            var activeProduct = this;
            var clonedItem;

            // maxIndex
            $('.forward').on('click touchstart', function (event) {
                clonedItem = '';
                event.stopPropagation();
                $(clonedItem).addClass('maxIndex');
                $('#drop').find('.maxIndex').removeClass('minIndex');
                $('#drop').find('.cloned-item').siblings().removeClass('maxIndex');
                $('#drop').find('.changes').addClass('maxIndex');
            });

            // minIndex
            $('.back').on('click touchstart', function (event) {
                clonedItem = '';
                event.stopPropagation();
                $(clonedItem).addClass('minIndex');
                $('#drop').find('.maxIndex').removeClass('maxIndex');
                $('#drop').find('.cloned-item').siblings().removeClass('minIndex');
                $('#drop').find('.changes').addClass('minIndex');
            });

            // clone
            $(document).on('click', '.clone', function (event) {

                event.preventDefault();
                console.log(event.type)
                var ttt = 50 + "px";
                var cloneTop = $('.changes').offset().top;
                clonedItem = $('#drop').find('.changes').removeClass('changes');
                $(clonedItem).clone().css({
                    position: 'absolute',
                    top: cloneTop + 100,
                }).appendTo("#drop");
                movieProduct();
            });

            // flip
            $(document).on('click', '.flip', function (event) {
                clonedItem = $('#drop').find('.changes');
                $(clonedItem).toggleClass('flip');
            });

            // remove
            $('.remove').on('click', function () {
                clonedItem = $('#drop').find('.changes');
                $(clonedItem).remove();
            });

            // info
            $(document).on('click', '.info', function () {
                clonedItem = $('#drop').find('.changes');

                var modalContent = $(clonedItem).clone().removeClass().addClass('modals-box').css({
                    "position": "relative",
                    "top": 0,
                    "left": 0
                });
                $('.preview-product').html(modalContent)

                if ($('.preview-product').html() == '') {
                    $('#preview-modal').hide()
                }
            })
        });
    });


    // not finished resize and rotate functions

    // resize
    // $(document).on('mousedown touchstart', '.changes',  function (event) {
    //
    //
    //     if(event.type == 'touchstart') {
    //         console.log('touch');
    //         $(this).addClass('resizing');
    //
    //         $(this).on('touchmove', function (event) {
    //             //
    //             var resizeTop = event.originalEvent.touches[0].pageY - $('.resizing').offset().top;
    //             var resizeLeft = event.originalEvent.touches[0].pageX - $('.resizing').offset().left;
    //
    //             // console.log(event.originalEvent.touches[0].pageY)
    //             //
    //             $('.resizing').css({
    //                 height : resizeTop,
    //                 width: resizeLeft,
    //                 color: 'red'
    //             })
    //         });
    //         $(this).parents().on('touchend', function (event) {
    //             $(this).removeClass('resizing');
    //         })
    //     }
    //     else {
    //         $(this).addClass('resizing');
    //         $(this).on('mousemove', function (event) {
    //             var resizeLeft =  event.clientX - $(this).offset().left + 'px';
    //             var resizeTop =  event.clientY - $(this).offset().top + 'px';
    //             $('.resizing').css({
    //                 height : resizeTop,
    //                 width: resizeLeft,
    //                 color: 'red'
    //             })
    //         })
    //         $(this).parents().on('mouseup', function (event) {
    //             $(this).removeClass('resizing');
    //         })
    //     }
    // })


});

