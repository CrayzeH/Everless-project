$('#notify').click(function () {
        $('#header').addClass('white-header')
        $('.header-button').addClass('white-header-button')
        $('#registry').addClass('white-log-reg-button')
        $('#login').addClass('white-log-reg-button')
        $('.buttons').addClass('buttons-white')
        $('.showed').addClass('hidden-tag')
        $('.hidden-tag').removeClass('showed')
        $('.hidden').addClass('showed')
        $('body').css({
            backgroundColor: "white",
            margin: "0"
        })
        $('.reasons').addClass('blue-reasons')
        $('#first-rb').css({backgroundColor: "#C0D6FF"})
        $('#second-rb').css({backgroundColor: "#D2E2FF"})
        $('#third-rb').css({backgroundColor: "#E1ECFF"})
        $('.why').addClass('blue-reasons')
        $('#why-one').css({backgroundColor: "#e1ecff"})
        $('#why-two').css({backgroundColor: "#D2E2FF"})
        $('#why-three').css({backgroundColor: "#C0D6FF"})
        $('#foot').css({backgroundColor: "#292929"})
        $('.footer-right').css({backgroundColor: "#292929"})
        $('.footer-left').css({backgroundColor: "#292929"})
        $('.footer-btn').addClass('white-footer-btn')
        $('#polit').css({color: "white"})
        $('.auction-main').css({backgroundColor: "#97B4FF"})
        $('.by-name').css({backgroundColor: "#d2e2ff",
        color: "#272b3f"
        })
        $('.lowest-high-price').css({backgroundColor: "#d2e2ff",
        color: "#272b3f"
        })
        $('.left-right-arrow').css({backgroundColor: "transparent",
        color: "#272b3f",
        borderColor: "#272b3f"
        })
        $('.page-number').css({color: "black",
        backgroundColor: "transparent"
        })
        $('.page-number-none').css({color: "black",
        backgroundColor: "transparent",
        })
        $('.page-number-choosed').css({color: "black",
        borderColor: "black",
        backgroundColor: "transparent"
        })
        $('.no-items').addClass('no-items-white')
        $('#sell-one').css({backgroundColor: "#E1ECFF"})
        $('#sell-two').css({backgroundColor: "#D8E5FF"})
        $('#sell-three').css({backgroundColor: "#CBDDFF"})
        $('#sell-four').css({backgroundColor: "#C0D6FF"})
        $('.what-to-sell').css({backgroundColor: "#97B4FF"})
    });

$('#notify-2').click(function () {
        $('#header').removeClass('white-header')
        $('.header-button').removeClass('white-header-button')
        $('#registry').removeClass('white-log-reg-button')
        $('#login').removeClass('white-log-reg-button')
        $('.buttons').removeClass('buttons-white')
        $('.showed').removeClass('hidden-tag')
        $('.hidden-tag').addClass('showed')
        $('.hidden').removeClass('showed')
        $('body').css({
            backgroundColor: "#13151E",
            margin: "0"
        })
        $('.reasons').removeClass('blue-reasons')
        $('#first-rb').css({backgroundColor: "#13161F"})
        $('#second-rb').css({backgroundColor: "#171C2B"})
        $('#third-rb').css({backgroundColor: "#1E2337"})
        $('.why').removeClass('blue-reasons')
        $('#why-one').css({backgroundColor: "#1E2337"})
        $('#why-two').css({backgroundColor: "#171C2B"})
        $('#why-three').css({backgroundColor: "#13161F"})
        $('#foot').css({backgroundColor: "#0D0E14"})
        $('.footer-right').css({backgroundColor: "#0D0E14"})
        $('.footer-left').css({backgroundColor: "#0D0E14"})
        $('.footer-btn').removeClass('white-footer-btn')
        $('#polit').css({color: "#1F2233"})
        $('.auction-main').css({backgroundColor: "#0D0E11"})
        $('.by-name').css({backgroundColor: "#1F2233",
        color: "#5d6798"
        })
        $('.lowest-high-price').css({backgroundColor: "#1F2233",
        color: "#5d6798"
        })
        $('.left-right-arrow').css({backgroundColor: "#0D0E11",
        color: "#C3DCFD",
        borderColor: "#5d6798"
        })
        $('.page-number').css({color: "#5d6798",
        backgroundColor: "#0D0E11"
        })
        $('.page-number-none').css({color: "#5d6798",
        backgroundColor: "#0D0E11",
        })
        $('.page-number-choosed').css({color: "#C3DCFD",
        borderColor: "#C3DCFD",
        backgroundColor: "#0D0E11"
        })
        $('.no-items').removeClass('no-items-white')
        $('#sell-one').css({backgroundColor: "#1E2337"})
        $('#sell-two').css({backgroundColor: "#181E30"})
        $('#sell-three').css({backgroundColor: "#171C2a"})
        $('#sell-four').css({backgroundColor: "#13161F"})
        $('.what-to-sell').css({backgroundColor: "#0D0E11"})
    });
