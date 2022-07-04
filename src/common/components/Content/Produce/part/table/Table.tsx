
interface ITable {

}

export const Table = () =>{

    return (
        <table>
            <thead>
            <tr>
                <th scope="col"><input type="checkbox"/></th>
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">등록자</th>
                <th scope="col">등록일</th>
                <th scope="col">사용여부</th>
                <th scope="col">HOT지수</th>
                <th scope="col">참여 수</th>
                <th scope="col">댓글 수</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>78</td>
                <td>콘텐츠 76 제목</td>
                <td>먹기위해 사는자</td>
                <td>{Date.now()}</td>
                <td>사용</td>
                <td>105</td>
                <td>17</td>
                <td>54</td>
            </tr>
            <tr>
                <th scope="row"><input type="checkbox"/></th>
                <td>78</td>
                <td>콘텐츠 76 제목</td>
                <td>먹기위해 사는자</td>
                <td>{Date.now()}</td>
                <td>사용</td>
                <td>105</td>
                <td>17</td>
                <td>54</td>
            </tr>
            </tbody>
        </table>
    );
}