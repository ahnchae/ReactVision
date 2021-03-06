import React from 'react';
import GetBranchList from 'components/businessSupport/GetBranchList';
import CardBox from "components/CardBox";
import { connect } from 'react-redux';
import { getBranchList, getLocalList } from 'actions/BusinessSupport';

class BranchManage extends React.Component{

    constructor(props){
        super(props);
        this.state = {search:{serachKeyword:null}}
    }

    render(){

        const { branchList, localList } = this.props;

        if(branchList === undefined){
            this.props.getBranchList(this.state.search);
        }

        if(localList === undefined){
            this.props.getLocalList();
        }

        return(
            <div>
            <CardBox styleName="col-lg-13" cardStyle="p-0" headerOutside>
            {/* 전해줄 props값이 있으면 전해주고 아니면 Component 자체를 부르지 않음
                내부에 있는 map이 값이 undefined면 에러가 나는 상황을 방지 */}
            {(branchList !== undefined && localList!==undefined)? ( <GetBranchList></GetBranchList>):""}
          </CardBox>
           
            </div>  
        );
    }
}

const mapStateToProps = ({ businessSupport }) => {
    const { branchList, localList } = businessSupport;
    return { branchList, localList };
}

export default connect(mapStateToProps, { getBranchList, getLocalList })(BranchManage);