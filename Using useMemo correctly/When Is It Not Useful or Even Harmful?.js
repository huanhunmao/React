

❌示范
export const NavTabs = ({ tabs, className, withExpander }) => {
    // 这个地方 没道理 
    // 1 没有 复杂昂贵的计算 
    // 2 没有将结果 传递给其他组件 使用 
    const currentMainPath = useMemo(() => {
      return pathname.split("/")[1];
    }, [pathname]);
    const isCurrentMainPath = useMemo(() => {
      return currentMainPath === pathname.substr(1);
    }, [pathname, currentMainPath]);
  
    return (
      <StyledWrapper>
        <Span fontSize={18}>
          {isCurrentMainPath ? (
            t(currentMainPath)
          ) : (
            <StyledLink to={`/${currentMainPath}`}>
              {t(currentMainPath)}
            </StyledLink>
          )}
        </Span>
      </StyledWrapper>
    );
  };




  // 第二个 不合适的例子  传递了 但是 本身并不复杂  
  export const Client = ({ clientId, ...otherProps }) => {
    const tabs = useMemo(
      () => [
        {
          label: t("client withdrawals"),
          path: `/clients/${clientId}/withdrawals`
        },
        ...
      ],
      [t, clientId]
    );
    
    ...
    
    return (
      <>
        ...
        <NavTabs tabs={tabs} />
      </>
    )
  }
  
  export const NavTabs = ({ tabs, className, withExpander }) => {
    return (
      <Wrapper className={className} withExpander={withExpander}>
        {tabs.map((tab) => (
          <Item
            key={tab.path}
            to={tab.path}
            withExpander={withExpander}
          >
            <StyledLabel>{tab.label}</StyledLabel>
          </Item>
        ))}
      </Wrapper>
    );
  };