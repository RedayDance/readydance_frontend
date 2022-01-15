const BannerItem = () => {
    //TODO: param으로 현재 선택한 카테고리가 무엇인지 알아오기
    return(
        <div className="BannerItem">

                <section>
                    <h4>소개</h4>
                    <p> 소개란입니다.</p>
                </section>
                
                <section>
                    <h4>사진</h4>
                    <p> 사진이 들어갈 곳</p>
                </section>

                <section>
                    <h4>시설</h4>
                    <p> 시설안내입니다.</p>
                </section>

        </div>
    )
}
export default BannerItem;