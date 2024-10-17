import React, { useEffect, useState } from 'react';
import { getTestData } from '../api';

function Test() {
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTestData()
      .then(response => {
        setTestData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('데이터를 불러오는 데 실패했습니다.');
        setLoading(false);
        console.error('API 호출 오류:', err);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>테스트 페이지</h1>
      {testData && (
        <div>
          <h2>받아온 데이터:</h2>
          <pre>{JSON.stringify(testData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Test;
