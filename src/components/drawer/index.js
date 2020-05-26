import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar,
         Title,
         Drawer,
         Text,
         TouchableRipple,
         Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function DrawerContent(props) {

    const [idDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!setIsDarkTheme);
    }

    return(
        <View style={{flex:1, backgroundColor: "#099e47"}}>
            <DrawerContentScrollView {...props} >
                
                <View style={styles.drawerContent}>
                    <View style={styles.infoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10, paddingLeft: 5}} >
                            <Avatar.Image 
                                source={{
                                    uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFRUVFhUVFRcWGBgXFRUVFxcXFxUVFRcYHSghGBolHRcYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS8yMC8tLS0tLS0uLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIASUArAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABNEAACAQIEAwUEBwQGCAMJAAABAhEAAwQSITEFQVEGEyJhcQcygZEUQlJygqGxI2KS8DOTorLB0TRDU2ODwtLhFqPxFRckJURUc7PT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwUAAgQBBv/EADMRAAICAQQABAIIBgMAAAAAAAECAAMRBBIhMQUTQVEiYTJCcYGRobHRBhQVI1LxM8Hw/9oADAMBAAIRAxEAPwDt9ChQrs5BQo6KuTsFM4pPCfSaeqDxTiCWkM6mNF5mroCSAJRyAOZnuHcdfvcplgTljmPMVqg1cys49rd7vBoQ0+XmK3mA43aurIYKQJIJj5daYa3TlSGVeJj01wOQTLMGlxUXB4tLglWBpy7jLamGYA9CaXFTnGJtDDGZWcYQoC+45xuKyXEeONsJ+NdBuoHUjcERpXPO0vCDaYxJU7H/AAPnTPw9q2ba/cX6yoj4l6lJfxTMZJpmaBFFXoAABxF4goUpVp8YVomDHWKhYDuTMjzSs1GyRRok1MiciIpy0YNX/CezrXVzTA5edJxfZ64msaVlOqqLbcwnkvjOJouAcXVkCsQCNPWrb6TWa4NwPMuYtHSKmXsFeUwrSOVJbq6t52mb63sCDIkjgvHrZsKXcZxoRz8vWn7vH7akBtjzrmi3iDIOtOtjWb3jNbm8LXcTniBGtYDE6db43ZL5Q3SDyM1ZVyGziINbHg3adQqo4JO0z8qx6nw9qxlOZop1gY4aa2o2IwNt/eUHz51IBo6WgkdTaQDMxxnsur+K1oY261icfYe0xVgQRXXawPbXBsLmc7NsfTem3h+qYv5bniL9Xp1A3LM5ZxrqZBIPkYpT8QdjLMSepMmokUprZG4inexM9Rdky/4Z2lu2hAMjodflTnEe0bXrZRwomCIHSs3RigHSVbt2OYTznxjPEDUQFKihFaYGS+HWczAROtbQooXLECNqxWEulSD0rTYfiiPAOlLdYjEgjqGrIEruK8MAGdNqrcNZ8VaHiuOQrkXWl9neGhyWYaDaot5SrLzor3PgTScMVRbUKIgVKZQRBFJtWo0pykTHJzHCrgYkJLAtqYqkxXHWDEAaCtO6yKqb3Z+2xJJMmj1OmSbIKxH+pOZ0KBoV6mJoAaft3aYoVwjMk2XAe1AQZLpJXkdyP+1XNztZhwJDFj0iK5pSlNL7PDanbdNS6yxRibQdsDmJygr0/wC9UXGONveaSYGoAGwB3HxqoJpNGq0VSHcBBtqLGGCYpTUjEYsuBmAkc+dRhR1pKgnMDE0KMiiq0kOaMNSaFSSPWzU3D2WOwqRwHgjXjmOi/rW3wPCLdsaCT1NLdVrErO0cmaadOz8zEnCsvvAj1rYcBIFsAb86m4jBK4gim8Jhe7kDUUtu1ItTB7muug1tmThR0kUqsM2iFQijoVJJxujipuBwJuMFA1NXd/stcUaQfSvVvqa0O1jEK1MwyBMtFCr3D8EZnyHQ1JxvZG4olSG8udVOrqBwTOilyMgTM0YqRdwjKYYQaVawpYwBJoxdcZlMGR6Wlqasf/ZNwEKVOYiY026nkBvqekCTpVlY4SiCbrD7qkhfSdGb8h1Bpbq/FtPpxycn2E2abQW3HgcSjtYMscqgs3QCY6Zjso8yQKnW+AXDvlX1YlvkoI/OrYY62oCoABrAEKNPegD86Q3EG5ACvM6j+Jbyf7YwPxjurwaoD4+ZC/8ADR/2w/qz/wD0pJ7Mn/bA/wDDI/POalHGv1/IUX0tvtViHj+uz9P8h+00/wBJ0/8Aj+Zldd7PXhtkb0bX+0APzqHd4bdX3rbD4ZgB1LJIHxNX645+v5CpFriH2h8v8q1VfxNqV+mAfygLPBaT1kS37PsuQZSCI0IMj5irkGstbZS0q0OeamGMR7w+sBI94Ea1Ks8WZQC0OhAIdeh2LL0iPENN5CgUSvX16hs9E+8G+keocciaChTOEvB1DDY08RWn5QIhAUdFQmpJDoTRTRTUkzMj2RsrmJO/KtfVfw3hyoBG/OrECj6m0WWFhA6dCqYMi38GGYNsR+dROJcQ7oefKraKruI8OF3QmKpWylhv6lrFOPh7mFxd0uxJ1Jqw4IxBOUa6AsRISdYA+s8RpsJk8gzV/h7B8g0JMAnkObfAa+Zgc6mYu8LSBLY10UCebHcnruxOp3OtX8W8SWmsVV9n8hOeH6LzG3v0InH4qJRCZPiuMJLdN9y5gjTYDSPDVQ6mMzGNDm/ctxORI2/eYamNPq5WcLxA3muJaQm7akPbMCH1AZ2MDu9oI1IJ00q0s8JYhQ75QpBhYZmI1BZ3Ebwx8O43ryLsw5c/vPQrtHCyMlqCT6DoFUbKOg5/H0oLeU+6c33fEfks1ZixYTcAkbFpdgfKZI+EUnF8Zt21LMwVV3Z2CKPiTWbcGPqYTJEgqCfqXP6u5/00ru2+w/8AV3P+moD9v8CD/pFr5sfzC0/a7a4M7YnD/G8i/wB6KuarB9Q/++6V8z5iPMCN1cfgf/ppK3lJgMs9JE/LekXe3OAQEvibWn2HF0/K3J/Ksn2i9q9sg28LZzzpnvjwfhtAy34iPQ1evTWWHG0yrXheyJqOI49LORnfKxcKij37jN4Qijc6sPIQCassLiSpXWQGeddgxk6cyH26LIFYH2dcAu4l/p2JLQJFjRRmaTLIsZVtrJAAESSRGWtrisDdTMwGcSreCQ2gyuChOoKgAQT4jMCr2ItbbA3InFfeMkTQ8Kx5ScokBiHtgzB3zJ0JBDRsc3IyTe/TEIUgyG2P87HyrDcP4jBIJkB8unnqvpvlP7wNX+FxIQ5j7jRn6LyFz4bHy1+rrv0erIby7Jj1On43JL65cAEmk23BEiqJy928bZOgJ+Qq+tWwoAGwp46BAM9xWrlj8oZpNKy0MtDzLHMTbanag27+lIxWPFsAsYBZVnaC7BV/tED41YoZwWDEsJoOwAJJgAEknYAakmowxFQONYssvdWyMxKlyRKqkhipEiWYaR0aTpAIrWFaljC1/GcCV3EMXrmIOdtETTMF3CxyOxY7TuYAiHb4eDDXoY75d0E7zPv+radAKknKgLE6ndjqzHzPP02HKKyfa3tnZwwhjmciVtKfEehuH6i/yAa8w9ll9nw9xyqhF56lf7Q+Ad5GJwYK37Q8Xd+Esg2KER+0HluNNwBXMz23x4GUYy6R5tmPxLAk/OmO0fabEYs/tX8EyttdLa+i8z5mTVEdadafTlawtnMwW2AtlOJoP/F+OP8A9Vd+DR+lL4rhsc+HTFX2uvZZiqG47PBjRsrHwq2oB55T5TL9n3Zb6XeLXAe4tQX/AH2+raB89z5dJBrs2NwVu7aazcUG265Cuwy8ojaIERtA6Vy21KmAAhqaHtUkn7J5tZ6LvDVr2m4K+FxD2W1ymVaIzodVceo36EEcqp62AgjImNgQcGLzmnMNiCjBoVoMwwDKfVToR5HSk3MO6qrFSFcEqeTAEqYPkRFNV2Vmrtdv+IjbEkcoW3ZAjkIFuIq64d7UMehGdrV3X/WIFJ8gbZWudqa6B2S7dWMPCvgraDY3LAIuEfvd4xL/AMY9Ky3UJtyEB/CHrck8tibvhfaUYuO+weIsOcsXrdp7ts5SCmchJidpBjWGG9avB3CG7txqRI5qw5lZ5a6g6j0IJq+DcatX173D3A67HcEHo6nVT6/DSrkFbg13GvQqeRU9aRWuA2NuP+oyVSB3mFhQ9ouyn3CBqZJR5yHz2Kzzyk1bYDG3LnLTmapmRmdFJ8RJWdldYzBiOoKgR1uab1ouE2iqQepr1mm1At04Y8t1EF9RS4gdSwopo5ppniuTpMqOIYoW/M1R8dxvf4e5ZAEupAJ2DbqT8QKYxF8sZJo7NgMCSYAj1JJgADmSSB8RTYUIiZeLdxZuJj+De065ZXusTbL5fCLk/tEggEOp0uFRPMEkAEmZGiw3bnhxQkYlREkhwysSd/eHiYnXSazXb7sM7qcThxmfVr1pef71rmxgajdjJGpy1yG+5BI6afEV5vUCvV8KxwD6R5SG045HJnUe1HtKSCuFlnOguMsKn3EbVj94AeRrlmLxbOxZmLMxJJYkkk7kk7mmGYmiFXp06UjCiSy5n7jti0zsFUFmYhVA3LEwAPMmtN2n4QbD2MCgDXFVWux9fE3yPCD0Ci2o+J+sauvZJwHPdbFOPDZ8NvobpGp/Cp+bg8qseC4T6RxvEXTqth3P4kixbH5FvwVx7sMR7CFSjKg+5m17OcHXC4dLC6lRLt9u4ffb56DyAHKrOKFClDMWOTHCgKMCYr2p8DF7Dd+o/aWNT52iRnH4TDegbrXGMutemrtsMCrAFWBVgdipEEHyIrzx2h4WcNiLtg6920AndkMMjepUqaY6OzK7T6RbrasMHHrNpwHgH0zgxVRN6zevNZ6kwha3+IfmFrnDrXafZJ/oJ/8Az3P7lusL7TeC9xjGZRCXx3q9AxP7Rf4tfIOKJXb/AHGQwdtQ8pXExtGDRUq4hBIIIIJBB0II3BHI1qmOWfBOM3cPcFy02Vhp1DDmrj6ynp8RBg127sr2iTF2u8TwusC4kyUb/FDrB8iNwa8+qa1fZPFX8LlxiKXshjavBdYBg5HH1SdGVtiQBMyKxazTLavzmrT3FDj0noO2RcUHYghgdyjrqrD0/MSOZq8XGza7yNYMjowJDCecEETWLwfEBCvbOdXAcRu9vTVfOGBHnA0nS1xTnIXRpUgMwGquke8o+0AJkbgRr4Yy+GXeW+x+iYTW0l13L3HDxxxPnUG/xZ2Mlo9KiXhTIWvbpRX3ieYZ36khVmpuAsyc/JZC+bahm9AJUdZbyNR8hMAGCxCg8xPvEeYUMfhVhjLot2zsoUQOigD9AB+VIvHdaa08pezG3hmmDHefSZrtv2oTC2+TOZFtPtMN2aPqLI9Tp5jg3GMbcv3Xu3WzO5ljAEmANANhAArf4Xgt3il98RcY27E5VP1iq+7btg6ac22zE6EzDftJ4fhcLhrNixaVWe4XZozXCqKR4nPigs4028NKNJ5dJFfbHuMbwzru9BOaU5aWT18uZ8qQa0HYbCC5jbAIJAfOQoknuwXA9CVAkwBOpA1pmTgTGoycTtXZrhX0XC2rHNF8cc7jeK4fPxEgeQFUnYLDRd4hcI1bGXUP4GZv1umtRkc7tl8lg/xMwM/ACPPeq3guCCtigpZT9JdmIMyblq1cmGkbMBtypRnIbJ7/AHjvbgrgdftLmhTEXF5hx8Ff5+6x/hpy1cDCRPQgggg+YNAIhcxZrmPtg4Z4rOJA3my/qJe2fWM4/CK6aCOXmPiNCKz3b/B97gL45oouj1tkMf7OYfGi0PtsEFqF3VkSD7LgE4eGYgA3brEkwAJC6k7e7Uf2p4PvsH3oRv2DhsxEeByEYBT4tyhMge7zqf7PMGVwVhnM++6Dkoa45zebkH3uQ0ESxa64/hu9wt+39uzcUeuQ5T84ojOFuz84NULUbT7TgnZ7Ad9irNrLmD3EBGmqgy+5A90HcirP2j4Lu+IXyFIFxhdAII1uCX33GfPqJGmhq79kvDc+Ka+R4bNswf8AeXJUf2e8/KpHtmwwF3D3ObW3Q/8ADYMP/wBprd5v93Z8pg8r+yW+c5pWq9n/AB0YbEgPHc3otXQYyhSfC5B08JOs/VLVlqVbOtGdQykGZ1YqciegcFgxaHdp4Vzu1pTtauCc9oHcofEw091m20rQcEvyCBtMr1Ek50PmrA/OBtWQ7C8SGJwiltblsqlwyZLWwO7c9SUCyecEcq1GHu5SDXnbyVcqe44TDKCILtnKWSNFjL9w+78Bqv4KZyVZ4y3/AKwcgA3ms6N+GSfQmmThzXtfDNYLqASeRwZ5nXacpacdGP2LHjUkfVcj1lRI+DEfiqH2kw/e2mtZiveKykjcBhlJHnBNWpuksoPJHA/it1WcXuhfEdgsnQnmeQ1Pwry/jDsdV+Ed+HKBT+MhWLSogVQFRFgDYKqjr0A51w/txxsYrEtcX+jUBLf3FmGjlmJLfEDlW47R47GY2cPhLF1bR0d7im0HHQl4yp5e8enI4PthwMYO4lnPnc2le4YhQzM4yoN4AA1O87Dar6GoI2WPxH0ndU5IwOpn66N7G8LN+9c+xaCj/iODP/l/nXPLSSwEgSQJOgEncnkK6B7J7jWsbdsuMpNt1ZTuHtusj4DPW7Uf8ZxM2mx5q5nW5phmVCxhvEQTlR2EgBR7inWAPlVN2o43dtFLGGtG5iL05JH7NFEZnYnQkSNJgbnkGq7XYQXf2mPv3MRc3KhiLanovOPTKPKlaoAMscAxuzknCDM2Vu6GEgzy9D0I5HyOtKrKYLsoth+8wneWDEFTc7xWA2W5bOjD0uAjkRWpFUsVRypzLIzH6QkTEXAl20BvdZlboQtp3DEfaGRVno0HYQfGbRfD30AktZuqANyWtsAB5maqeA3fpF69feJsXb2FtKNkVSudz1d4WegUAc60M11/hIHqJxDuBPoZE4dhxYsWrf8As7du3pqWKqF06kkVR8R7aYO02S7iACDBS0veka6hrhBSeqjY8zVtxrAC8mVrrW1OjlSFOQ6MqsdELaKWg+EsojMTUfhXD8Phwq23t2x0QWgGjmzMGuN6l6ImzG5uTKuH6HAmd9mPFcGlhMOt4d+5LurArmc6BUY6NCqoiZOumtI9slmcPYb7N1l/iQn/AJBWr4gMNdCrctrfzEhYUP4grNo+yGFMHMKzPtQsP9CtySct+2FWc7t+zugZmgS0cgOslpmioQbQ/WYGxStRTucpxXDylm1dJ/pjdCj922VXNPmSw/DUNa2vtHwAw64HDje1hjm83a4xc/Fs1YpaYq24Zit02tgze9mzfwK2cYoN3DX1C3oGqkMVKsJ0ZWBytsZjQmuqYTEJcVbltgyMJVhsR/n5bis37NoPDrYOozXgQdQQbjSCOY1q34fwe3YdjZLIj6ta0NrN9tAdUPKAYjltCLVuruQeCPzjTTqVUEdGajCjNby9VZfnIrR2bKXFV8o8QBI6HmD5g6fCs1ww+H4/5Vp+Ef0Q82uH5uxrT4U5G4CZtaoJBlRi7QDkDZVUD4+In4yP4RVLxL3vh/ia0fGLcOCPrJr+AiPnn/Ks9xTRl/ekD1GsfKT8DWTxDcdQcw2kI8sSEK4v7SSW4he8u6Uf1SGB8SfnXZlYHUbVz7jvC/8A51h2YSt5rdzyLWlgr/5aH8VW8PcLYc+0tq1LIAPec/7QcIOFvmwxllS0W8me2rso8gWKzzit7w7D5/onFrWpXKmNXn4R3N2/H3DmYeYP2qk9vOx+IxeIF3C285Fod6MyJlKkhDLsJzDQD9w0/wCyjCXUTEK2mS6q3bTCHtMVGS5B3V4ZT0NtTqCSrPzd9If5f7mVKwtu0/j+k3mXXzEj9J/QfKmmxCDQugPQsAf1q14Xw+21tblxQ2YZlDCUVPqQp0zRBk6gkgaVcW9BpoOUbUNNDkZJh31wBwomT75Ptr/EP86PvV+0vzFawN50Jq/8ivvKf1A/4zG2MLaRndAqm4QzwdGYT4iJjNrqQJMCZgU+nkGb7qs/90GtXNCu/wAkp7Mr/PsOlEzSWXO1u4fVWT83AFGvD7hYE2SCAQGY29JiRKuSNhy5CtHTeJu5EZ4kKpYgbkASY89KuNHWPeVOusPtKheE3T7zIvpmuflCfrVfx/gYPctcIZLd5bgAXLFwK62y0sZXM46HNl3BMaz1/nzqn4rfD4UNEEnCsV5rmvWmg/zyqxoRVOBKLqbGYZPrOHe167OMUfZsWx83ut/iKxvDMBcv3BbtLmchyBzORGcgdTCmBzNbLtVwrEY7id9MPbNwqUQ6gKmVFU5mYhV8Qbc6mYpnspw25hOLW7N8BbltrisJBHjsPkII3BDAj1FcVtlX2CSwb7T8zNt7MW/+AUdLl0fnP6GtTUTh+AWybuT3bt1rsclZlUMB5EqW/FUsV569w9hYesaVLtUCWnDNj61bcNxbC2o/mZ1/OarMFAQE6DUk9B1+VS8GWCCRBPiIO4LHMQfiTTfwVMljFviLYAlzxi1KZvsHMfNYIb5A5o/dFZji9gshjdSGXpI6nodQfImttWbxuF7tsv1TJT7vNPw/pG8GueI0EgWL6SaWzB2mY4ayFMZvGhP2pzOjfi1I3hmA92o+NsLeNsnwtbdWttEtbuj3kfqrqY6HQg6pVnjsOtssTMSG8gZjMOnny0J5mU8/M/OB/lP50sFgHIjLbnuC4CUYAuB32YlNSB3KqkjdhnLmIYSuopzhBBuBioBuC5Yc5Ssm2zd2zTqACjAAzHexSAwGbMCVdcjhZLRqVZQNSVJbQakM0SYFRxZyiBKt4WR7YL2bhUhrdyFUgaqpOgOkAkCt1LhkB+6DI7H3zU8NvMLNqEzBVCNBGYNb8B0aARKtOs6DQzonhuPQA2yXBskWyXR1BAVWU5mUAkqyk+c8oJTwvFKSIkJeHfWwRBViJu2iDswPiIOss/2TU3DWyM0jdyZ6gxHyEL+Gm6HKiKHGGMh8M4jZNtR3trMgCOA66MnhaBO0iR1BB51L+mW/tA+mv6UMEGCmZk3Lp16G65X4QRHlFP1aUjBxi9H+Fq6f0Wh9KXo/9XcH6qKfoVJJHOIblauHz/Zj9XB/Ko/Ee/a1cVLaS1tws3DmzFSB4QkTP71WFCpJIGKw7XrTDvRluIwUouUEOpiSxYxryymonFbiqtsZSAM2IuDUsVRNQxOpcsywTqSlW/hReSoq+QVVUfIAAfCKzHFLxbxyF7xgxzg+DD2TKA6iGNxlaCdPGNYgiubCw1ClmlFgcGVRrLEh2Zrl425XPevftHcOYlFLwACWIQA6aGV2r4LbxNxyZS6j23tXVAzW7gtWiD+8uiyp6cjrUrB2knvHByKQxLAd5ef6iwYgSJCwNRsqjVTMWzFj4mJZiORPIEjYCFB6AUqutKrkHkxmEBOMdRjD4kxDwrKQrwfBmMABSesiBuMwB3EvJcmcokg5R0LzAWfWATy16Gmfo20GI2j6oM5iv75k+I66nzmz4ThNQ0QqeG2POILDyA8I9W5RWEhCciEyQJa4TCZ8lo6yBmPVFjPp0Oix+/5VoPoC1D4FZ0Nwj34y/cE5fnJb0YDlVvT/AEdZprx6nmKL2Fjxo3gdjUHHAOuUg+R5qeRWef8A6GRIo8EwB1p3FMTpHnW3YM4My7yRmZ7GYNvcuABtSCPdYdV8uqnUeYgnOYnDZPC0gDVH5oeQJPLkCdwYb97o3cC4mW4J/IjoQRqCOoql4hwtlGoLryZR4x95R+qiOoEUk1OiKEtX17ftGlGqBGGmONu5qNp1MEgTOrIdSh5lSGU7Tq0vqhj3yNZMRBPUqwIk8yNTHwqddwAUDJBWNI2A3ERy9Krhf6qZHvAalejAD3lOuo+U5sq4O5PE3Db3JmEuhVKOzFC2cN9e3cmcwCj3SdTA0JJ1BMXGF4mBAulRMZbgP7O4DsQw0Un1gyIMnKMwt1zBXKRrqCCjdPENUOm8MP8ACm7TcWxGDa3etL3tm43d3bBmC5ko9sgEo7eJSRIPhkGmGl1Dhghma+lSMzqdFWW4fxBlC5CU2Hc3YIB+yjKYnkAp88lW1vjK/Xtsp5kEOvoNmP8ADTJb0PfEwtp3HQzLSaFQDxez9pv6u7/00huMpyS43oFH99lq/mJ7iUFNh+qZY03iL6ouZ2CjaT1OwA3JPIDU1VNxO65y20VZ2mXbz8IgKfPMw8qruJ8Rs4dLmIvs142lJYJDFQSqlc2iIZKyoInoaGdQvS8wg07DluP1lndum7LOe7sJ4jmIEhdSznYKImOUSTOi5jCcVXGM+ItKMgburTOW0S1IVlt7al3Mkq3iIO1Z7i/EcXjsXhbV1O7wroMSbImCiEkLfOmcyLfhgAd4NJE1dcIwIwtsWU8ShrjKILXCGdmAOoCxIGYmDHKaw6m3jv4j+k2UJg8DgSY93KSTLEaZm8FtZ5KSI128OZjoD5GMQQBmG+g0hnbeFQmQPvGRBmAJp3vNgdGPIa+p2289qdwuCDsYJH2mE/wBuXWBtzidVxYN9ITUeIrh6l2iNB7xB0B+yDGp69Na0WEwveSuyiFc+oBKL55SNdIzCJO0bCYf6lsABYBMaLpoI5tEacgQTyDWthMi5RMee5J3JPWmGh0G8+Yw49Iv1erC/CO5bBhypeaqxLpp0XKcmvEWiwSVbsKKcijoVQnMIBiChRTRzXJ2VWJ4PubbZZJOVhmWSZMbFZ9SB0rOcSwKyBdXu3nwnYE/7u4IkmOUNG4G1Re2nbs2y1rDsBlkPc0Oo3VJ005sfOOtcf4tx57jliSx2LOSzH4tJil2pprc8d+4jrR6O4oHc4U9Z7nW34eUJOXU7sBqY2k7n40xcsq0ZgDDBhPJlMqfUGuWcK7T3rBGR2UdFPg+NtpU+sTW74R25w12FxOW2x+us5SfNfeT+0PMbUtfT2KcjmaXqKjPYmgs2ZtuTB/alSOUGzaMHqN/nTBsx7jFfL3l/hOw8lK1N4fft3MM9y02a290lTBE5AlptwD71tuVRzRmyuPsEFV8QP2mNd843TN5oRr5kORl9JNDPcPJU9fEfQqIAP4jTlCq7/lC4iFsyIZmcHcNAU+TIoCt+IE0rjvDVuYQWnHhvXbQI6pbJvZfQ91Hxpa1I7YYpbFm0xBIW6BCxJ/Y3gIkgfnRayxyYC1RwoHZkBkBbNAzAEAxqA0FgDyByr8h0pYWdBOvTesNxDtbeJOTLaX4M3xZhHyXTrVaO0d7/wC5uD7txl/ukVlFDHsxguhtI5wPtM6lheHgDM57tZEiYZjsM9yfhoZ213FXeFwpIAVe7QaAlYMdEQjw+rD4EGa5z2S7XNaug3ibisdWYZ7qaATbY+KNNU57jWZ61ZcOAyEMrAMpGoIIkEEbg010mjrb4nOflEfiJv07bCMZ9Yi3bCiFEAf46kknckySTuTSlSacFs9Kk2sP1puWCiJQpYyMLcHUU+AnnS7tjpSRZNULAwgUiSjWC7Udv1QlMNlaNDcOq/8ADH1vvHToCDNN+0ftNkX6PbOrLN09AdrfxGp8o3DGuJ8V4mXJAOn61jtsIO1Y+8P0KuvnW9eg95vf/eHiwf8ASD6FbX6ZKk3vaTiTbdCU8SlQ4UrcWfrAgxMTy8+VclL0tMQw2NA3P6GNRVpCfirH3S04xj58I00/LkKp2ahcuEyT60ioq4El1u9+Ic1Iw/p8v51qMK2ns24H9IxSsw/Z2Iuv0JBm2p9WE+iMK6YBiFUmdPwmC+j4PD2D7yqM8fb1a5/bY0wakY3E52J5bD0qJNLrW3NmCrXC8xc0U0maKaHCR1TTftQtZuHufsPZf5uEn+3QVqtcThxisJcskxnttbn7LEeFvgYPwrTQeZnu4w3tPO15jO8+utID1IxthkZldcrKSrKd1ZTDKfQgj4VFNbJr3HsS04fiztOv610Xsb24bDDJcBe0STAjOhOpKSQCCd1JGpnqDye20fOpg4gwqo3I2VmktTqadl87ljPaVa/1dt2++Qg+AXNP5VK4N7Q7dw5bq93Oz5syj78gFR56jrA1rgJxz/aqVguKMpEmRRvPf1mD+m6PbtXOfeeqrLE68qdiuX+zjtbGXD3WlGgWiT7jHZPuHYdCQNj4eoCtCuHGREeo070Psb/c829r+Js7u5PidiT8dYHkBoPICsexqdjsaGJ8IPrVcaxDJ5M9PaVUBV6AxDo6TNHXYANBQAoCrzslgLF693d4kEibY+qzD3laIbUaiCNjrtXc8ThbHMj8C4LexN0WrKZm3PJUX7Tt9Vf/AEAJ0rsHC8DbwlgYeyc2ua7ciDceIMdF0AA6Ab6kow5Nm0LNi1atpuQmZMxjdic5Y+ZM9aT355ow8xBHwAOY/KsltmeFguWOW/CSJoVHTFKSBmgnZTKsfRWg/lTs1mPzhB8ouipM0U1J2LmpOBxZRp3B3H886rTi15HNyOUF49coMfGgL7ckb1JUD8iT+VWAIlDg8Ss9o/ZTvgcZhhmMftkUSWAEd4o5sAAGHQA7gzyh1ruOFx95D4VSOmdiD6jJ+hrE+0jC4fKLq21tXrj6i2fDcG7sykAA6jUASWEzvWyuwNwe5RSycdiYBaOhNFNFhQcQ6MGkzQmpO5l9wLGRof5Br0T2K4qcThUdjLqTbc9SsQx8ypUnzJrzDgbwDb8vhWs4V2guW0hL1xQTJCXHQEwBMKQJgAfAV1H2MZfU6b+bqUKRkfpMVmoppJOtHUggYqaKOlFQqScGKzdakqlxAlyGUMSbb7SUYAlT1Vo15Gos1ou2Sm22HsT/AEGHtqfvtJc/GFNWC5BME1hDBfebjsxx5cTb1gXUjvF69HUdD+R06E3M1xbh3EHs3FuWzlZduh6gjmDzFdW4JxVcRaFxRG6sv2XESPMagjyIrBfVt+IdQqt6SxdQRBAIO4IkH4Gk27cbEx0JkD0J1+ExQzUM1AyZbEcmmXshve8Q6HVf4dj6mTSLbyz67ZVjzAzT8nHypyamCsnccmiJpuaKak7iDEYlUVnc5VUFmJ5AVyjtBxZsRea4ZC+6in6qDYHzOpPmekVZ9sO0PfN3Vtv2SnUj/WMOf3Ry679IqeztxRirGYBgbiqQQGBznJqDppmn4Vvoqx32YF3wC3tK00U1N45hxbxF5FgKtxwoHJcxyj4CKgxRiuJFfcARBNChQqTsOactvpTJpaGpiQNENQJ0oGk8qtiUJi6FFQrmJcGT+C2M9+yn2rtsH0zjN+U1K7VYjPi77f7wr/VgW/8AlpXY4TjLH3mPytuR+lQLs3brZdTcuMR5lmJH61Y8LM5I83PsIjB4R7jZUUk/kB1J2Arc9kcOcO5tvcB75SQvIPbjRSfeJVmOw9wUjh+EWygRfxHmx6n+dKqO09057QUwwzEEbgkplI85Wlo1Bus8tepPMJYYnRpoTUPC4gyUYyQJB0GYTBkDmNJI08Q0G1SZobIVODNgbMRhj7x6u39mE/5Kemq7g7HuULTJBYyZMsxYgnnqalNeAIBIlpgczAkx6VHHxESqn4QY9NZjtxxY27QtKYa6DmPS2NGA8yTHoG8q0F++FEnnsBux6AfzG5gViuL2kxWJZXJBtKJykQZIOUSNlkCY1JY6UWlQPjboSlr7RMgzTUjhpi7bPS5bPyYVpR2fsfvfxf8AamrvZ9B4kdgRrBhhprA2j86MurqLAAzObBgyt7WCMZf+/wDqAap5rTdrOFXWxN64i5lLT4dWEKAfDudQdprNMI/nn0NaiQScS1LjYB8omhQJoTUhcwUtabBpa1JUGJJpP/ajIojXZxuoqaTcEgihRzUnTyMR3DYfEWETF25USYddcjAlSrgjSfPQhh6VP7J3ENyWYAqpCgkCSdBE+U1H4fxS7ZzC20BveUhWVuWqsCPKoFq0FrtoDoVmJaHRuOp0mqDFDvMdbXobYPov7RvyJqiw2OuJ7jlfKZX+E6Ve9ly73XvspJ90GPCHfUT0GVSPiBuRWGjSeUxbMOFIPM2J5EGCDIPQ7fKCQR505dx4CNmBUhW2BZTAOoKiR8QPjvUXDtpuT+8frdSB0/nzKcY37N/uP/dNFZAx5mo9ZEl2cYgUBAW0EaFRHXMwGnpJ8qaYZiS2pMeWWNgvMR131prDv4R6D9KXmqBApJEiDKjMUqiZ5nckksfIk6msqrRj7o6g/mEetIcREiDIgwOa9R1jXTfTzFZjH3F+nKymQwXXkSVa3odjqBqOYI3BrrrlGHygrsbeJdZqbv31VczMFURJOwBIEn50eas92sS4wthVZllicoJ8WgWQPKfmaVaavdaAZksOFMd4n2uXvGNpMwLEhmOUETp4Yn5xTyWkxloXCuR9RI11BjX7S/pSeF8EsJalgz3biZWzrlWznWHyg7vBIB166c7a0gUBVEAAAAbADlW3VvXWc1/S7zBU7/WYfFYdkYqwgj+QR1FNVq+0GDz28495BPqu7D4b/PrWTatNFosXM2q2RCFOLTQpaCjS3pAU86ncH4d3zlM2WELAxOoKjUdNTQoVWw4UkQb8CRGtQSOhI+Rik5KKhXZcE4h5aKKFCuzuYMtb/gOHVeHsYBzLecyPrLmC/LIvyoUKDecAfaJE5JloRTGM/o7n3H/umjoV31hz1FWkgR00pVChUPc4OhGcYpyswMMqsynzA28wf8ugql7c2xbewyj3QwHpbZCo/M/OhQqv1gPtg7AMGK4di+9XNly+Uz/gKlRQoUrvULYQJk9IIoRR0KDiSGBWHx1kLcdRsGYD0BMUKFb9B2ful07kcLT1tNKOhTKGE//Z'
                                }}
                                size={85}
                            />

                            <View style={{marginLeft: 5, flexDirection: 'column'}} >
                                <View style={{flexDirection: 'column'}}>
                                    <Title style={styles.titleC}>Manual de</Title>
                                    <Title style={styles.title}>Sobrevivência</Title>
                                </View>
                            </View>
                        </View>

                        {/* <View style={styles.row} >
                                <View style={{paddingTop: 10}}>
                                    <Text style={{fontSize: 15, color: '#8a8584'}}>Redes Sociais</Text>

                                    <View style={styles.socialSection}>
                                        <Icon.Button name='instagram' size={25} color={'#c9c5c1'}
                                        backgroundColor="#099e47" onPress={() => {alert('INSTAGRAM')}}
                                        ></Icon.Button>

                                        <Icon.Button name='facebook-square' size={25} color={'#c9c5c1'}
                                        backgroundColor="#099e47" onPress={() => {alert('FACEBOOK')}}
                                        ></Icon.Button>
                                    </View>
                                </View>
                        </View> */}
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection} >

                    <DrawerItemList {...props} />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='github'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="GitHub"
                        onPress={() => {}}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='instagram'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="Instagram"
                        onPress={() => {}}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='facebook-square'
                            color={color}
                            size={27}
                            />
                        )}
                        
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="Facebook"
                        onPress={() => {}}
                    />

                    <DrawerItem 
                        icon={({color}) => (
                            <Icon name='iconfontdesktop'
                            color={color}
                            size={27}
                            />
                        )}
                        labelStyle={{fontSize: 20, fontWeight: 'bold'}}
                        inactiveTintColor='#c9c5c1'
                        label="Site"
                        onPress={() => {}}
                    />
                </Drawer.Section>
                
                <Drawer.Section title="Preferencias">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Tema escuro</Text>
                            <View pointerEvents="none">
                                <Switch />
                            </View>
                        </View>
                    </TouchableRipple>

                </Drawer.Section>
            </DrawerContentScrollView>
            
        </View>
    );
}