const [searchedList, setSearchedList] = useState([]);
const [selectedPage, setSelectedPage] = useState(1);
const [selectedList, setSelectedList] = useState([]);
const [searchText, setSearchText] = useState("");
const [searchType, setSearchType] = useState("강의명");
const [searchDropIsOpen, setSearchDropIsOpen] = useState(false);
const searchTypeList = [
  "제목",
  "작성일자"
]


const initSearchedLectures = () => {
  setSearchedLectures(wholeLectures);
}

//page control
  let pages = 1;
  if (searchedList !== undefined) pages = parseInt(searchedList.length / 10) + 1;
  let pageButtons = [];
  let start = selectedPage - ((selectedPage-1) % 10)
  let end = start + 10
  if(pages >= start && pages < end)end = pages + 1;
  for (let i = start; i < end; i++) {
    pageButtons.push(
      <PageButton
        onClick={() => {
          setSelectedPage(i);
        }}
        index={i}
        selectedPage={selectedPage}
      >
        {i}
      </PageButton>
    )
  }

const sliceList = () => {
  setSelectedList([]);
  setSelectedList(searchedList.slice((selectedPage - 1) * 10, (selectedPage - 1) * 10 + 10));
};

useEffect(sliceList, [selectedPage, setSelectedList, searchedList]);

  //searchBar control
  const onClickSearch = () => {
    setSelectedPage(1);
    if (searchText === "") {
      initSearchedLectures();
      setSearchType("제목");
      return;
    }
    setSearchedList(archives.filter(
      (e) => {
        switch (searchType) {
          case "제목":
            return e.title.indexOf(searchText) !== -1;
          case "작성일자":
            return e.date.indexOf(searchText) !== -1;
          default:
            return true;
        }
      }
    ))
    setSearchText("");
  }



<PageSelectorWrap>
<PageSelector>
  <PageButtonWrap>
    <PageButton>
      <LeftButton
        onClick={() => {
          if (selectedPage > 1) setSelectedPage(prev => prev - 1);
        }}
      />
    </PageButton>
    {pageButtons.map((e) => { return e; })}
    <PageButton>
      <RightButton
        onClick={() => {
          if (selectedPage < pages) setSelectedPage(prev => prev + 1);
        }}
      />
    </PageButton>
  </PageButtonWrap>
</PageSelector>
</PageSelectorWrap>
<LectureSearchBarWrap>
<LectureSearchBar>
  <DropDownWrap>
    <DropDown
      state={searchType}
      setState={setSearchType}
      isOpen={searchDropIsOpen}
      setIsOpen={setSearchDropIsOpen}
      list={searchTypeList}
      fontSize={"var(--font-size-xs)"}
      width={"6rem"}
      listWidth={"3.5rem"}
      height={"1.875rem"}
    />
  </DropDownWrap>
  <SearchInput
    value={searchText}
    onChange={(e)=>{
      setSearchText(e.target.value);
    }}
  />
  <SearchIconWrap>
    <SearchIcon
      onClick={onClickSearch}
    />
  </SearchIconWrap>
</LectureSearchBar>
</LectureSearchBarWrap>



export const PageSelectorWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PageSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 2.5rem;
`

export const PageButtonWrap = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--color-dg);
`

export const PageButton = styled.div`
  font-size:var(--font-size-lg);
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  ${(props) => props.index === props.selectedPage ?
    `
        color: black;
        cursor: default;
      `
    :
    ``
  }
`

export const LeftButton = styled(TbArrowLeft)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const RightButton = styled(TbArrowRight)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const LectureSearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LectureSearchBar = styled.div`
  height: 2.5rem;
  width: 50%;
  margin-right: 7%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-gr);
  border-radius: 0.25rem;
  background-color: white;
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  margin-left: 3px;
`

export const SearchIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3%;
`
export const SearchIcon = styled(TbSearch)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const DropDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
`